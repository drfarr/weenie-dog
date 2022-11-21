import React, { useEffect, useRef, useState } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { Spinner2 } from "styled-icons/evil";

import { useRouter } from "next/router";
import { MinusCircle, PlusCircle } from "styled-icons/feather";
import { Minus } from "styled-icons/open-iconic";
import { useSession } from "next-auth/react";
import { trpc } from "lib/trpc/next";
import { toast } from "react-toastify";
import useHotspots from "lib/hooks/hotspots/useHotspots";
import { CloseCircle } from "styled-icons/remix-line";
import useUpdateProject from "lib/hooks/projects/useUpdateProject";

const Hotspot = ({ idx, hotspot }: { idx: any; hotspot: any }) => {
  const [hover, setHover] = useState(false);
  return (
    <li
      key={idx}
      className="snap-always snap-center py-5 px-2 flex justify-between w-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className="label-text ml-4">{hotspot.title}</span>
      <CloseCircle className="w-5" style={{ opacity: hover ? 1 : 0 }} />
    </li>
  );
};
export const Loader = () => {
  return (
    <div className="bg-base-100 rounded-box p-10 flex items-center shadow-2xl justify-center self-center flex-col">
      <img className="w-48" src={"/loader.gif"} />
      <div className="text-xl animate-pulse mt-5">Fetching...</div>
    </div>
  );
};

const View = ({
  item,
  idx,
  onClick,
}: {
  item: any;
  idx: any;
  onClick: any;
}) => {
  const contentEl = useRef();
  const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    userSelect: "none",
    padding: 0,
    filter: isDragging
      ? "drop-shadow(0px  5px 5px rgb(9 46 129 / 0.5))"
      : "none",

    ...draggableStyle,
  });
  const router = useRouter();
  const active = router?.query?.view === item?.id;
  const session = useSession();
  const projectId = router?.query?.id[0] as string;
  const { isLoading, data } = useHotspots({
    projectView: { id: { equals: item?.id } },
  });

  const utils = trpc.useContext();
  const update = useUpdateProject({ id: projectId });

  const addHotspot = () => {
    update.mutate({
      where: {
        id: projectId,
      },
      data: {
        projectViews: {
          update: {
            where: {
              id: item?.id,
            },
            data: {
              hotspots: {
                create: {
                  title: `Hotspot z`,
                  user: {
                    connect: {
                      id: session?.data?.user?.userId,
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
  };

  const handleCreateHotspot = () => {
    addHotspot();
  };

  return (
    <Draggable key={item.id} draggableId={item.id.toString()} index={idx}>
      {(provided: any, snapshot: any) => (
        <div
          onClick={() => {
            onClick(item);
          }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
          key={idx}
        >
          <li
            className={`snap-center list-none p-3 bg-base-100 mt-1 rounded-lg w-full max-w-xs ${
              active
                ? "border-2 border-pink-500 text-pink-500 border-solid"
                : "opacity-50"
            }`}
          >
            <div
              className={`flex justify-between mb-3 sticky top-0 bg-base-100 mt-1 ${
                active ? "border-b-2 border-indigo-500  p-3" : null
              }`}
              onClick={onClick}
            >
              <div> {item?.title}</div>

              {active ? (
                <MinusCircle className="w-5" />
              ) : (
                <PlusCircle className="w-5" />
              )}
            </div>
            <div
              ref={contentEl}
              className={"w-full answer_wrapper"}
              style={
                active
                  ? { height: contentEl?.current?.scrollHeight }
                  : { height: "0px" }
              }
            >
              <div>
                <ul className="scroll-smooth snap-y">
                  {item?.hotspots?.length > 0 ? (
                    item?.hotspots?.map((hotspot: any, idx: any) => (
                      <Hotspot key={idx} idx={idx} hotspot={hotspot} />
                    ))
                  ) : (
                    <div className="p-5">No hotspots</div>
                  )}
                </ul>
                <div
                  className="btn btn-primary btn-smw-full"
                  onClick={handleCreateHotspot}
                >
                  Add hotspot
                </div>
              </div>
            </div>
          </li>
        </div>
      )}
    </Draggable>
  );
};

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const ViewsList = ({ items, onClick }: { items: any; onClick: any }) => {
  const [data, setData] = useState(items ? items : []);
  useEffect(() => {
    setData(items);
  }, [items]);

  const [clicked, setClicked] = useState("0");

  const handleToggle = (index: any) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  const handleOnClick = (id: any, index: any) => {
    onClick(id);
    handleToggle(index);
  };
  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setData(newItems as any);
  };

  const grid = 8;

  const getListStyle = (isDraggingOver: any) => ({
    padding: grid,
    width: 250,
  });

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided: any, snapshot: any) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {data?.map((item: any, index: any) => (
              <View
                onClick={handleOnClick}
                key={index}
                item={item}
                idx={index}
              />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ViewsList;
