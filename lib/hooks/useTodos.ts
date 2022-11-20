import { trpc } from "lib/trpc/next";
import { useSession } from "next-auth/react";
import { TodoListInput } from "types/trpc";

// it's worth defining the query input as a hook
// you're going to want to be able to reference this
// when you are updating the cache.
export function useTodosQuery(): TodoListInput {
  const session = useSession();

  return {
    where: {
      userId: {
        equals: session.data?.user.userId,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  };
}

// no need for params, but could paginate?
export default function useTodos() {
  const query = useTodosQuery();
  return trpc.todos.listTodos.useQuery(query);
}
