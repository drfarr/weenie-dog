import { trpc } from "lib/trpc/next";
import { useSession } from "next-auth/react";
import { HotspotListInput, TodoListInput } from "types/trpc";

// it's worth defining the query input as a hook
// you're going to want to be able to reference this
// when you are updating the cache.
export function useHotspotsQuery({ where }: { where?: any }): HotspotListInput {
  const session = useSession();

  return {
    where: {
      ...where,
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
export default function useHotspots({ where }: any) {
  const query = useHotspotsQuery({ where });
  return trpc.hotspot.list.useQuery(query);
}
