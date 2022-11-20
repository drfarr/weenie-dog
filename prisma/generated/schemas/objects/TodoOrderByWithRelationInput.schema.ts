import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TodoOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    done: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TodoOrderByWithRelationInputObjectSchema = Schema;
