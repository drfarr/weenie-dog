import { data, t } from "lib/trpc";
import { ProjectViewCreateOneSchema } from "prisma/generated/schemas/createOneProjectView.schema";
import { ProjectViewFindManySchema } from "prisma/generated/schemas/findManyProjectView.schema";
import { ProjectViewFindUniqueSchema } from "prisma/generated/schemas/findUniqueProjectView.schema";
import { ProjectViewUpdateOneSchema } from "prisma/generated/schemas/updateOneProjectView.schema";

export default t.router({
  create: data.input(ProjectViewCreateOneSchema).mutation(({ input, ctx }) => {
    return ctx.prisma.projectView.create(input);
  }),
  update: data.input(ProjectViewUpdateOneSchema).mutation(({ input, ctx }) => {
    return ctx.prisma.projectView.update(input);
  }),
  list: data.input(ProjectViewFindManySchema).query(({ input, ctx }) => {
    const q = {
      ...input,
      include: {
        hotspots: {
          orderBy: {
            createdAt: "asc", // messages for each converastion will be ordered newest first.
          },
        },
      },
    };
    return ctx.prisma.projectView.findMany(q);
  }),
  read: data.input(ProjectViewFindUniqueSchema).query(({ input, ctx }) => {
    const q = {
      ...input,
      include: {
        hotspots: {
          orderBy: {
            createdAt: "asc", // messages for each converastion will be ordered newest first.
          },
        },
      },
    };
    return ctx.prisma.projectView.findUnique(q);
  }),
});
