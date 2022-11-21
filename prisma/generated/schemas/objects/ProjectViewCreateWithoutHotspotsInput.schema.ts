import { z } from "zod";
import { UserCreateNestedOneWithoutProjectViewInputObjectSchema } from "./UserCreateNestedOneWithoutProjectViewInput.schema";
import { ProjectCreateNestedOneWithoutProjectViewsInputObjectSchema } from "./ProjectCreateNestedOneWithoutProjectViewsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewCreateWithoutHotspotsInput> = z
  .object({
    id: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional().nullable(),
    resourceUrl: z.string().optional().nullable(),
    user: z.lazy(() => UserCreateNestedOneWithoutProjectViewInputObjectSchema),
    order: z.number(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
    project: z
      .lazy(() => ProjectCreateNestedOneWithoutProjectViewsInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProjectViewCreateWithoutHotspotsInputObjectSchema = Schema;
