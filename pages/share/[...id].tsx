import { useProject } from "lib/hooks/projects/useListProjects";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { isUndefined } from "@s-libs/micro-dash";
export default function Share(params: any) {
  const router = useRouter();
  const id = router?.query?.id[0];

  const { data } = useProject({ id });

  const project = data?.length && data?.length > 0 ? data[0] : null;

  const [selectedView, setSelectedView] = useState(project?.projectViews[0]);

  const handleNext = (id: any) => {
    const index = project?.projectViews.findIndex((view) => {
      return view.id === id;
    });

    console.log(index);

    setSelectedView(project?.projectViews[index + 1]);
  };

  return (
    <div>
      {project?.projectViews?.map((view: any, idx: any) => {
        return (
          <div
            style={{
              background: "white",
              minHeight: 500,
              minWidth: 500,
              opacity: selectedView?.id === view.id ? 1 : 0,
              top: 0,
              left: 0,
              position: "absolute",
              margin: 10,
              zIndex: 1,
            }}
            key={idx}
          >
            {view?.hotspots.map((hotspot: any, i: any) => {
              return (
                <div
                  style={{
                    transform: `translate(${hotspot.x}px,${hotspot.y}px)`,
                  }}
                  key={i}
                >
                  {hotspot.title}
                </div>
              );
            })}
            <img src={view.resourceUrl} />
            <div onClick={() => handleNext(view.id)} className="btn">
              Next
            </div>
          </div>
        );
      })}
    </div>
  );
}
