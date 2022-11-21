import { trpc } from "lib/trpc/next";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { ProjectViewListOutput } from "types/trpc";
import { useProjectViewsQuery } from "./useProjectViews";

export default function useUpdateProjectViews() {
  const query = useProjectViewsQuery();
  const utils = trpc.useContext();
  const updateProjectViews = useCallback(
    (newProjectViews: Partial<ProjectViewListOutput[number]>) => {
      utils.projectViews.list.setData(
        (old: any) =>
          old?.map((projectViews: any) =>
            projectViews.id === newProjectViews.id
              ? { ...projectViews, ...newProjectViews }
              : projectViews
          ),
        query
      );
    },
    []
  );

  const update = trpc.projectViews.update.useMutation({
    onSuccess(data: any, variables: any, context: any) {
      // update the cache
      updateProjectViews(data);
      toast("View updated", {
        type: "success",
      });
    },
    onError: (err: any, newProjectViews: any, context: any) => {
      console.log(err.message);
      // rollback
      toast(err.message, {
        type: "error",
      });
      utils.projectViews.list.setData(context.previousProjectViews, query);
    },
    async onMutate(variables: any) {
      // cancel any fetches
      await utils.projectViews.list.cancel();
      // snapshot incase of rollback
      const previousProjectViews = utils.projectViews.list.getData();
      // work out the updates from the mutation
      const update: Partial<ProjectViewListOutput[number]> = {
        id: variables.where.id,
      };
      if (variables.data.hasOwnProperty("content")) {
        update.content = variables.data.content?.toString();
      }
      if (variables.data.hasOwnProperty("done")) {
        update.done = variables.data.done as boolean;
      }
      // update the cache
      updateProjectViews(update);
      // return the snapshot
      return { previousProjectViews };
    },
    onSettled: () => {
      // always refetch
      utils.projectViews.list.refetch(query);
    },
  });
  return update;
}
