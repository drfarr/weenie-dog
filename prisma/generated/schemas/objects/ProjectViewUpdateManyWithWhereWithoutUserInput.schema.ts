import { z } from "zod";
import { ProjectViewScalarWhereInputObjectSchema } from "./ProjectViewScalarWhereInput.schema";
import { ProjectViewUpdateManyMutationInputObjectSchema } from "./ProjectViewUpdateManyMutationInput.schema";
import { ProjectViewUncheckedUpdateManyWithoutProjectViewInputObjectSchema } from "./ProjectViewUncheckedUpdateManyWithoutProjectViewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ProjectViewScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjectViewUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ProjectViewUncheckedUpdateManyWithoutProjectViewInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProjectViewUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
