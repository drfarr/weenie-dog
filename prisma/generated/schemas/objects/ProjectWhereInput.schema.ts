import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { ProjectViewListRelationFilterObjectSchema } from "./ProjectViewListRelationFilter.schema";
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema";
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProjectWhereInputObjectSchema),
        z.lazy(() => ProjectWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectWhereInputObjectSchema),
        z.lazy(() => ProjectWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    projectViews: z
      .lazy(() => ProjectViewListRelationFilterObjectSchema)
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const ProjectWhereInputObjectSchema = Schema;
