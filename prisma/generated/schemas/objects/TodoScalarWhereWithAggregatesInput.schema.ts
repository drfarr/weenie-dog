import { z } from "zod";
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema";
import { StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema";
import { BoolWithAggregatesFilterObjectSchema } from "./BoolWithAggregatesFilter.schema";
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TodoScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    content: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    name: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    done: z
      .union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const TodoScalarWhereWithAggregatesInputObjectSchema = Schema;
