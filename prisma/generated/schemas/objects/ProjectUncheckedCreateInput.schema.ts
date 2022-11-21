import { z } from "zod";
import { ProjectViewUncheckedCreateNestedManyWithoutProjectInputObjectSchema } from "./ProjectViewUncheckedCreateNestedManyWithoutProjectInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    description: z.string().optional().nullable(),
    title: z.string().optional(),
    projectViews: z
      .lazy(
        () =>
          ProjectViewUncheckedCreateNestedManyWithoutProjectInputObjectSchema
      )
      .optional(),
    userId: z.string(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
  })
  .strict();

export const ProjectUncheckedCreateInputObjectSchema = Schema;
