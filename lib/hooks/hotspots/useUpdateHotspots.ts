import { trpc } from "lib/trpc/next";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { HotspotListOutput } from "types/trpc";
import { useHotspotsQuery } from "./useHotspots";

export default function useUpdateHotspots() {
  const query = useHotspotsQuery({});
  const utils = trpc.useContext();
  const updateHotspots = useCallback(
    (newHotspot: Partial<HotspotListOutput[number]>) => {
      utils.hotspot.list.setData(
        (old: any) =>
          old?.map((hotspot: any) =>
            hotspot.id === newHotspot.id
              ? { ...hotspot, ...newHotspot }
              : hotspot
          ),
        query
      );
    },
    []
  );
  const update = trpc.hotspot.update.useMutation({
    onSuccess(data: any, variables: any, context: any) {
      // update the cache
      updateHotspots(data);
    },
    onError: (err: any, newTodo: any, context: any) => {
      console.log(err.message);
      // rollback
      toast(err.message, {
        type: "error",
      });
      utils.hotspot.list.setData(context.previousTodos, query);
    },
    async onMutate(variables: any) {
      // cancel any fetches
      await utils.hotspot.list.cancel();
      // snapshot incase of rollback
      const previousTodos = utils.hotspot.list.getData();
      // work out the updates from the mutation
      const update: Partial<HotspotListOutput[number]> = {
        id: variables.where.id,
      };
      if (variables.data.hasOwnProperty("content")) {
        update.content = variables.data.content?.toString();
      }
      if (variables.data.hasOwnProperty("done")) {
        update.done = variables.data.done as boolean;
      }
      // update the cache
      updateHotspots(update);
      // return the snapshot
      return { previousTodos };
    },
    onSettled: () => {
      // always refetch
      utils.hotspot.list.refetch(query);
    },
  });
  return update;
}
