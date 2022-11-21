import { trpc } from "lib/trpc/next";
import { useSession } from "next-auth/react";
import { ProjectListInput } from "types/trpc";

// it's worth defining the query input as a hook
// you're going to want to be able to reference this
// when you are updating the cache.
export function useProjectsQuery({ where }: { where?: any }): ProjectListInput {
  const session = useSession();

  const query = {
    ...where,
    where: {
      userId: {
        equals: session.data?.user.userId,
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  };

  return query;
}

// no need for params, but could paginate?
export function useProjects({ where }: { where?: any }) {
  const query = useProjectsQuery({ where });

  return trpc.projects.list.useQuery(query);
}
