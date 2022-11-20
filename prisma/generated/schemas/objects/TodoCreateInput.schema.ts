import { z } from "zod";
import { UserCreateNestedOneWithoutTodosInputObjectSchema } from "./UserCreateNestedOneWithoutTodosInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TodoCreateInput> = z
  .object({
    id: z.string().optional(),
    content: z.string().optional().nullable(),
    name: z.string().optional(),
    done: z.boolean().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutTodosInputObjectSchema),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
  })
  .strict();

export const TodoCreateInputObjectSchema = Schema;
