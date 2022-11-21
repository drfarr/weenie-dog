import { raw } from "@prisma/client/runtime";
import { data, t } from "lib/trpc";
import { ProjectCreateOneSchema } from "prisma/generated/schemas/createOneProject.schema";

import { ProjectFindManySchema } from "prisma/generated/schemas/findManyProject.schema";
import { ProjectFindUniqueSchema } from "prisma/generated/schemas/findUniqueProject.schema";
import { ProjectUpdateOneSchema } from "prisma/generated/schemas/updateOneProject.schema";

export default t.router({
  create: data.input(ProjectCreateOneSchema).mutation(({ input, ctx }) => {
    return ctx.prisma.project.create(input);
  }),
  read: data.input(ProjectFindUniqueSchema).query(({ rawInput, ctx }) => {
    const query = {
      ...rawInput,
    };

    return ctx.prisma.project.findUnique(query);
  }),
  update: data.input(ProjectUpdateOneSchema).mutation(({ input, ctx }) => {
    return ctx.prisma.project.update(input);
  }),
  list: data.input(ProjectFindManySchema).query(({ input, ctx }) => {
    const q = {
      ...input,
      include: {
        projectViews: {
          include: { hotspots: true },
          orderBy: {
            order: "asc", // messages for each converastion will be ordered newest first.
          },
        },
      },
    };
    return ctx.prisma.project.findMany(q);
  }),
});
