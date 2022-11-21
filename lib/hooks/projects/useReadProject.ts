import { trpc } from "lib/trpc/next";
import { useSession } from "next-auth/react";
import { SortOrderSchema } from "prisma/generated/schemas/enums/SortOrder.schema";
import { ProjectInput } from "types/trpc";

// it's worth defining the query input as a hook
// you're going to want to be able to reference this
// when you are updating the cache.
export function useProjectQuery(id?: any, where?: any): ProjectInput {
  const session = useSession();

  const query = {
    ...where,
    where: {
      id,
    },

    include: {
      projectViews: {
        include: {
          hotspots: { orderBy: { createdAt: SortOrderSchema.Values.asc } },
        },
        orderBy: {
          order: SortOrderSchema.Values.asc,
        },
      },
    },
  };

  return query;
}

const useProject = ({ id }: { id: any }) => {
  const query = useProjectQuery(id);
  const utils = trpc.useContext();
  const queryData = trpc.projects.read.useQuery(query);
  trpc.useContext().projects.read.setData(queryData?.data);
  // console.log(query);
  // console.log(trpc.useContext().projects.read.getData(query));
  return queryData;
};

export default useProject;
