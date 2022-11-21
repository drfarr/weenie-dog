import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewCreateManyInput> = z
  .object({
    id: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional().nullable(),
    resourceUrl: z.string().optional().nullable(),
    userId: z.string(),
    order: z.number(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
    projectId: z.string().optional().nullable(),
  })
  .strict();

export const ProjectViewCreateManyInputObjectSchema = Schema;
