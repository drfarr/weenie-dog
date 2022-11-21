import { z } from "zod";
import { ProjectViewCreateNestedManyWithoutProjectInputObjectSchema } from "./ProjectViewCreateNestedManyWithoutProjectInput.schema";
import { UserCreateNestedOneWithoutProjectInputObjectSchema } from "./UserCreateNestedOneWithoutProjectInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectCreateInput> = z
  .object({
    id: z.string().optional(),
    description: z.string().optional().nullable(),
    title: z.string().optional(),
    projectViews: z
      .lazy(() => ProjectViewCreateNestedManyWithoutProjectInputObjectSchema)
      .optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutProjectInputObjectSchema),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
  })
  .strict();

export const ProjectCreateInputObjectSchema = Schema;
