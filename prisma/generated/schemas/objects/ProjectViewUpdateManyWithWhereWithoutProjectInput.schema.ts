import { z } from "zod";
import { ProjectViewScalarWhereInputObjectSchema } from "./ProjectViewScalarWhereInput.schema";
import { ProjectViewUpdateManyMutationInputObjectSchema } from "./ProjectViewUpdateManyMutationInput.schema";
import { ProjectViewUncheckedUpdateManyWithoutProjectViewsInputObjectSchema } from "./ProjectViewUncheckedUpdateManyWithoutProjectViewsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewUpdateManyWithWhereWithoutProjectInput> =
  z
    .object({
      where: z.lazy(() => ProjectViewScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjectViewUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ProjectViewUncheckedUpdateManyWithoutProjectViewsInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProjectViewUpdateManyWithWhereWithoutProjectInputObjectSchema =
  Schema;
