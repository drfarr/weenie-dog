import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema";
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { ProjectViewRelationFilterObjectSchema } from "./ProjectViewRelationFilter.schema";
import { ProjectViewWhereInputObjectSchema } from "./ProjectViewWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => HotspotWhereInputObjectSchema),
        z.lazy(() => HotspotWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => HotspotWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => HotspotWhereInputObjectSchema),
        z.lazy(() => HotspotWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
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
    colour: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    x: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    y: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    projectView: z
      .union([
        z.lazy(() => ProjectViewRelationFilterObjectSchema),
        z.lazy(() => ProjectViewWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    projectViewId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const HotspotWhereInputObjectSchema = Schema;
