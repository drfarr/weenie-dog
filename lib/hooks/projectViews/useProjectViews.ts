import { trpc } from "lib/trpc/next";
import { useSession } from "next-auth/react";
import { ProjectViewsListInput } from "types/trpc";

// it's worth defining the query input as a hook
// you're going to want to be able to reference this
// when you are updating the cache.
export function useProjectViewsQuery(): ProjectViewsListInput {
  const session = useSession();

  return {
    where: {
      userId: {
        equals: session.data?.user.userId,
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  };
}

// no need for params, but could paginate?
export default function useProjectViews() {
  const query = useProjectViewsQuery();
  return trpc.projectViews.list.useQuery(query);
}
