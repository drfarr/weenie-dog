import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TodoCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    content: z.string().optional().nullable(),
    name: z.string().optional(),
    done: z.boolean().optional(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
  })
  .strict();

export const TodoCreateManyUserInputObjectSchema = Schema;
