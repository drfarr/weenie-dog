import React, { useState, useRef, MutableRefObject } from "react";
import useOutsideClick from "@rooks/use-outside-click";
import * as S from "./styled";
import HotspotInfo from "../HotspotInfo";

import Draggable from "react-draggable";
import useResize from "hooks/useResize";
import useHotspots from "lib/hooks/hotspots/useHotspots";
import { useRouter } from "next/router";
import useUpdateHotspots from "lib/hooks/hotspots/useUpdateHotspots";
import Image from "next/image";

export type Hotspot = {
  description?: string;
  id: string;
  position: any;
  title?: string;
  windowSize?: any;
  view?: any;
};

const Hotspot: React.FC<Hotspot> = ({
  id,
  description,
  position,
  title,
  view,
  windowSize = { offsetHeight: 0, offsetWidth: 0 },
}: Hotspot) => {
  const needToSetInfos = !title && !description;
  const [isShowingInfo, setIsShowingInfo] = useState(() => needToSetInfos);
  const ref = useRef<HTMLDivElement>(null);

  const { width } = useResize();
  const left = (position?.left * width) / windowSize.offsetWidth;
  const router = useRouter();
  const { data, isLoading } = useHotspots({
    where: { projectView: { id: { equals: router?.query?.view } } },
  });
  const update = useUpdateHotspots();
  useOutsideClick(
    ref as MutableRefObject<HTMLDivElement>,
    (): void => setIsShowingInfo(false),
    isShowingInfo
  );

  const spotHandleClick = (): void => {
    setIsShowingInfo(!isShowingInfo);
  };

  return (
    <div className="relative h-full w-full min-h-full flex">
      <div className="absolute h-full w-full min-h-full -translate-x-1/2 -translate-y-1/2 inset-1/2">
        <div className="mockup-window border bg-base-300 mt-10 ">
          <div className="flex justify-center px-4 py-16 bg-base-200 align-center">
            <img
              alt="View"
              layout="fill"
              src={`../assets/${view.resourceUrl}`}
            />
          </div>
        </div>
      </div>
      {!isLoading && data && data.length > 0
        ? data.map((hotspot: any, idx: any) => {
            return (
              <Draggable
                key={idx}
                position={{
                  x: parseInt(hotspot?.x ?? 0),
                  y: parseInt(hotspot?.y ?? 0),
                }}
                onStop={(e, data) => {
                  update.mutate({
                    where: {
                      id: hotspot.id,
                    },
                    data: {
                      x: data.x.toString(),
                      y: data.y.toString(),
                    },
                  });
                }}
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    width: 30,
                    height: 30,
                    backgroundColor: "rgba(255, 0, 0, 0.5)",

                    borderRadius: "50%",
                    border: 0,
                    cursor: "grab",
                    boxShadow:
                      "0px 0px 0px 1.5px #fff, 0px 0px 0px 3px rgba(255, 0, 0, 0.5)",
                    transition: "all 0.1s ease",
                  }}
                >
                  {idx}
                </div>
              </Draggable>
            );
          })
        : null}
    </div>
  );
};
{
  {
    // data?.map((hotspot, idx) => {
    //   return (
    //   );
    // });
  }
  /* {isShowingInfo && (
          <S.InfoWrapper ref={ref}>
            <HotspotInfo
              id={"0"}
              title={"opo"}
              description={"PPP"}
              position={{ top: 0, left: 0 }}
            />{" "}
          </S.InfoWrapper>
        )} */
}
export default Hotspot;
