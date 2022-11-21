import { trpc } from "lib/trpc/next";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { ProjectOutput } from "types/trpc";
import { useProjectQuery } from "./useReadProject";

export default function useUpdateProject({ id }: { id: string }) {
  const query = useProjectQuery({ id });
  const utils = trpc.useContext();

  const update = trpc.projects.update.useMutation({
    onSuccess(data: any, variables: any, context: any) {
      utils.projects.read.invalidate();
    },
    onError: (err: any, newTodo: any, context: any) => {
      toast(err.message, {
        type: "error",
      });
    },
    async onMutate({ data, where }: { data: any; where: any }) {
      const previousProject = utils.projects.read.getData();

      return { previousProject };
    },
    onSettled: () => {
      utils.projects.read.refetch({
        ...query,
      });
    },
  });
  return update;
}
