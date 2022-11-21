import { z } from "zod";
import { UserCreateNestedOneWithoutProjectInputObjectSchema } from "./UserCreateNestedOneWithoutProjectInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectCreateWithoutProjectViewsInput> = z
  .object({
    id: z.string().optional(),
    description: z.string().optional().nullable(),
    title: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutProjectInputObjectSchema),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
  })
  .strict();

export const ProjectCreateWithoutProjectViewsInputObjectSchema = Schema;
