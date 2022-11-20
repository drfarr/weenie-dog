import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { BoolFilterObjectSchema } from "./BoolFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TodoScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TodoScalarWhereInputObjectSchema),
        z.lazy(() => TodoScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TodoScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TodoScalarWhereInputObjectSchema),
        z.lazy(() => TodoScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    content: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    done: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const TodoScalarWhereInputObjectSchema = Schema;
