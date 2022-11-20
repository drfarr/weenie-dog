import { trpc } from "lib/trpc/next";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { TodoListOutput } from "types/trpc";
import { useTodosQuery } from "./useTodos";

export default function useUpdateTodo() {
  const query = useTodosQuery();
  const utils = trpc.useContext();
  const updateTodos = useCallback(
    (newTodo: Partial<TodoListOutput[number]>) => {
      utils.todos.listTodos.setData(
        (old: any) =>
          old?.map((todo: any) =>
            todo.id === newTodo.id ? { ...todo, ...newTodo } : todo
          ),
        query
      );
    },
    []
  );
  const update = trpc.todos.updateTodo.useMutation({
    onSuccess(data: any, variables: any, context: any) {
      // update the cache
      updateTodos(data);
    },
    onError: (err: any, newTodo: any, context: any) => {
      console.log(err.message);
      // rollback
      toast(err.message, {
        type: "error",
      });
      utils.todos.listTodos.setData(context.previousTodos, query);
    },
    async onMutate(variables: any) {
      // cancel any fetches
      await utils.todos.listTodos.cancel();
      // snapshot incase of rollback
      const previousTodos = utils.todos.listTodos.getData();
      // work out the updates from the mutation
      const update: Partial<TodoListOutput[number]> = {
        id: variables.where.id,
      };
      if (variables.data.hasOwnProperty("content")) {
        update.content = variables.data.content?.toString();
      }
      if (variables.data.hasOwnProperty("done")) {
        update.done = variables.data.done as boolean;
      }
      // update the cache
      updateTodos(update);
      // return the snapshot
      return { previousTodos };
    },
    onSettled: () => {
      // always refetch
      utils.todos.listTodos.refetch(query);
    },
  });
  return update;
}
