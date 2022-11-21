import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectCreateManyInput> = z
  .object({
    id: z.string().optional(),
    description: z.string().optional().nullable(),
    title: z.string().optional(),
    userId: z.string(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
  })
  .strict();

export const ProjectCreateManyInputObjectSchema = Schema;
