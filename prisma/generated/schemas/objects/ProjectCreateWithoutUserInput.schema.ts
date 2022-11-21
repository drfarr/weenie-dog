import { z } from "zod";
import { ProjectViewCreateNestedManyWithoutProjectInputObjectSchema } from "./ProjectViewCreateNestedManyWithoutProjectInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    description: z.string().optional().nullable(),
    title: z.string().optional(),
    projectViews: z
      .lazy(() => ProjectViewCreateNestedManyWithoutProjectInputObjectSchema)
      .optional(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
  })
  .strict();

export const ProjectCreateWithoutUserInputObjectSchema = Schema;
