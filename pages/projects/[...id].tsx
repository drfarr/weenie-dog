import { Provider } from "components/Context";

import { getLayout } from "layouts/App";

import { NextPageWithLayout } from "../_app";
import { trpc } from "lib/trpc/next";
import { Loader } from "components/ViewList";
import { FileUploader } from "react-drag-drop-files";
import { useSession } from "next-auth/react";

import dynamic from "next/dynamic";

import { useRouter } from "next/router";

import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { CloseCircle } from "styled-icons/remix-line";
import { toast } from "react-toastify";
import path from "path";

import Logo from "components/Logo";

import useUpdateProject from "lib/hooks/projects/useUpdateProject";
import useProjectViews from "lib/hooks/projectViews/useProjectViews";
import useProject from "lib/hooks/projects/useReadProject";

const Hotspot = dynamic(() => import("../../components/Hotspot"), {
  ssr: false,
});

const ViewsList = dynamic(() => import("../../components/ViewList"), {
  ssr: false,
});

const fileTypes = ["JPEG", "PNG", "GIF"];

const AddView = ({
  projectId,
  className,
}: {
  className: any;
  projectId: any;
}) => {
  const session = useSession();
  const update = useUpdateProject({ id: projectId });
  const project = trpc?.useContext()?.projects?.read?.getData();

  const createView = () => {
    update.mutate({
      where: {
        id: projectId,
      },
      data: {
        projectViews: {
          create: {
            title: `View ${project?.projectViews?.length + 1}`,
            order: project?.projectViews?.length + 1,
            user: {
              connect: {
                id: session.data?.user.userId,
              },
            },
          },
        },
      },
    });
  };

  return (
    <div onClick={createView} className={`${className} btn btn-sm h-full`}>
      Add a view
    </div>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      bucketName: process.env.BUCKET_NAME,
    },
  };
};

const ProjectPage: NextPageWithLayout = () => {
  const router = useRouter();
  const projectId = router?.query?.id[0] ?? null;
  const { data, error, isLoading, ...rest } = useProject({ id: projectId });

  const [loading, setLoading] = useState(false);

  const project = data;

  const projectViews = useMemo(() => project?.projectViews ?? [], [project]);

  const [selectedView, setSelectedView] = useState(projectViews[0] ?? null);

  const editor = useRef(null);

  const update = useUpdateProject({ id: projectId });

  useEffect(() => {
    if (selectedView) {
      router.push(
        `/projects/${project?.id}?view=${selectedView?.id}`,
        undefined,
        {
          shallow: true,
        }
      );
    }
  }, [selectedView]);

  const handleBack = () => {
    setSelectedView(null);
    router.push("/projects");
  };
  const toastId = useRef(null);

  const handleUpdateProjectView = async (e) => {
    setLoading(true);
    // const toastId.current = toast.loading("Uploading...");
    toastId.current = toast.loading("Loading...");
    const file = e[0];
    var blob = file.slice(0, file.size);

    const ext = path.extname(file.name);
    const filename = `${selectedView?.id}${ext}`;
    const newFile = new File([blob], filename, {
      type: `${file.type}`,
    });

    const res = await fetch(`/api/projectView/update?file=${filename}`);
    const { url, fields } = await res.json();
    const formData = new FormData();

    Object.entries({ ...fields }).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append("file", newFile, filename);

    const upload = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (upload.ok) {
      await update.mutate({
        where: {
          id: projectId,
        },
        data: {
          projectViews: {
            update: {
              where: {
                id: selectedView?.id,
              },
              data: {
                resourceUrl: filename,
              },
            },
          },
        },
      });
      toast.update(toastId.current, {
        render: "Image uploaded",
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
    } else {
      toast.update(toastId.current, {
        render: "Problem uploading image",
        type: "error",
        isLoading: false,
        autoClose: 1000,
      });
    }
    setLoading(false);
  };

  const handleFileUpload = async (e: any) => {
    const file = e[0];
    const formData = new FormData();
    const { id, order, title } = selectedView;
    formData.append("id", id);
    formData.append("order", order);
    formData.append("title", title);
    formData.append("file", file);

    await fetch(`/api/file/upload`, {
      method: "PUT",
      body: formData,
    });

    toast("View updated.", {
      type: "success",
    });
  };

  const handleDeleteImage = async (e: any) => {
    const formData = new FormData();

    const { id, resourceUrl, title } = selectedView;

    formData.append("id", id);
    formData.append("title", title);
    formData.append("resourceUrl", resourceUrl);

    try {
      await fetch(`/api/file/delete`, {
        method: "DELETE",
        body: formData,
      });
      toast("Image deleted", { type: "success" });
    } catch (error) {
      toast("Error deleting image", { type: "error" });
    }
  };

  return (
    <div className="container flex mb-5 flex-col">
      <div className="mr-2 h-max mb-5">
        <div className="btn btn-primary btn-sm" onClick={handleBack}>
          return to Weeenie factory
        </div>
        <div className="modal" id="delete-image">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Delete Image</h3>
            <p className="py-4">
              This will delete the image which cant be undone.
            </p>
            <div className="modal-action">
              <label
                htmlFor="my-modal"
                onClick={handleDeleteImage}
                className="btn btn-secondary"
              >
                Cool
              </label>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="navbar bg-base-100 mb-5  p-5 rounded-box">
            <div className="navbar-start">
              <input
                type="text"
                onChange={(e) => {
                  console.log(e);
                }}
                value={project?.title}
                placeholder="Name your weenie..."
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div className="navbar-center hidden lg:flex jus"></div>
            <div className="navbar-end flex">
              <div className="form-control w-48">
                <label className="cursor-pointer label">
                  <span className="label-text">Published</span>
                  {/* <input
                    type="checkbox"
                    className="toggle toggle-primary"
                    checked
                  /> */}
                </label>
              </div>
              <div className="btn btn-sm btn-accent">
                <a href="#share-modal">share</a>
              </div>

              <div
                className="btn btn-primary btn-sm btn-disabled"
                onClick={() => console.log("ok")}
              >
                Save
              </div>
            </div>
          </div>

          <div className="container flex mb-5 min-h-screen">
            <div ref={editor} className="container sticky flex top-32 h-5/6">
              <div className="h-4/4 max-h-screen w-3/12">
                <div
                  id="sidebar"
                  className={`max-h-[91.6%] min-h- overflow-auto snap-y ${
                    projectViews?.length > 0 ? "pb-[20px]" : ""
                  }`}
                >
                  {projectViews && (
                    <ViewsList
                      onClick={(id: any) => {
                        setSelectedView(id);
                        router.push(
                          `/projects/${project?.id}?view=${selectedView?.id}`,
                          undefined,
                          {
                            shallow: true,
                          }
                        );
                      }}
                      items={projectViews}
                    />
                  )}
                </div>
                <div className="bg-base-100 rounded-box p-3 mt-1 mr-2 drop-shadow-xl border-indigo-600">
                  <AddView projectId={project?.id} />
                </div>
              </div>

              <div className="w-9/12 bg-base-100 h-4/4 drop-shadow-xl rounded-lg p-5 flex flex-col">
                <div className="text-2xl w-full flex items-center justify-between pb-2 border-emerald-500 border-b-2">
                  <div>{selectedView?.title}</div>
                  {selectedView?.resourceUrl && (
                    <a href="#delete-image" className="btn btn-ghost self-end">
                      <CloseCircle className="w-10" />
                    </a>
                  )}
                </div>

                <div className="flex w-full h-full align-middle justify-center">
                  {!selectedView ? (
                    <div>
                      <AddView projectId={project?.id} />
                    </div>
                  ) : selectedView?.resourceUrl ? (
                    <Hotspot view={selectedView} id={selectedView?.id} />
                  ) : (
                    <div className="hero-content text-center ">
                      {loading ? (
                        <Loader />
                      ) : projectViews ? (
                        <div className="max-w-md p-10 border-dashed border-zinc-400 rounded-lg border-2">
                          <FileUploader
                            multiple={true}
                            label="Drop files here or click to upload"
                            hoverTitle={"Give a dog a bone 🦴"}
                            handleChange={handleUpdateProjectView}
                            name="file"
                            types={fileTypes}
                          >
                            <div className="mb-5">Upload your weenie here</div>
                            <div className="hero bg-base-200">
                              <div className="hero-content  text-center ">
                                <div className="max-w-md px-10 border-dashed border-2 border-zinc-400 ">
                                  <img
                                    className="w-36"
                                    height={30}
                                    src="/placeholder.png"
                                    alt="Weenie"
                                  />
                                </div>
                              </div>
                            </div>
                          </FileUploader>
                        </div>
                      ) : (
                        <div className="bg-base-100 rounded-box h-96">
                          <div className="flex flex-row justify-center m-28">
                            <AddView
                              className={"float btn-xl"}
                              projectId={project?.id}
                            />
                            <Logo width={200} />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="modal" id="share-modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Share your weenie</h3>
              <p className="py-4">
                <input
                  type="text"
                  value={`/share/${item?.id}`}
                  className="input input-bordered input-accent w-full max-w-xs"
                />
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(`/share/${item?.id}`);
                  }}
                  className="btn btn-sm btn-accent"
                >
                  copy
                </div>
              </p>
            </div>
          </div> */}
        </Fragment>
      )}
    </div>
  );
};

ProjectPage.getLayout = getLayout;

export default ProjectPage;
