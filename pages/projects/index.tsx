import ActionBar from "components/ActionBar";
import Card from "components/Card";
import { Provider } from "components/Context";
import Header from "components/Header";
import { Loader } from "components/ViewList";

import { getLayout } from "layouts/App";

import { useProjects } from "lib/hooks/projects/useListProjects";
import { trpc } from "lib/trpc/next";
import { useSession } from "next-auth/react";
import { Fragment } from "react";
import { NextPageWithLayout } from "./_app";

const CreateProject = () => {
  const utils = trpc.useContext();
  const { isLoading, data } = useProjects({});
  const _createProject = trpc.projects.create.useMutation({
    onSuccess: () => utils.projects.list.invalidate(),
  });
  const session = useSession();

  const order = data && data?.length + 1;

  const createProject = () => {
    _createProject.mutate({
      data: {
        title: `Weenie ${order}`,
        user: {
          connect: {
            id: session.data?.user.userId,
          },
        },
      },
    });
  };
  return !isLoading ? (
    <div className="bg-base-100 rounded-box p-3 mt-1 drop-shadow-xl border-indigo-60 ">
      <div onClick={createProject} className="btn btn-sm h-full">
        Create weenie
      </div>
    </div>
  ) : (
    <Fragment />
  );
};

const Create: NextPageWithLayout = () => {
  const { data, isLoading } = useProjects({});

  return (
    <div className="container flex mb-5 flex-col">
      <div className="mb-2">
        <CreateProject />
      </div>

      <div className="hero h-full border-indigo-900 flex flex-row flex-wrap">
        <Provider>
          {isLoading ? (
            <Loader />
          ) : (
            data?.map((item: any, i: any) => <Card item={item} key={i} />)
          )}
        </Provider>
      </div>
    </div>
  );
};

Create.getLayout = getLayout;

export default Create;
