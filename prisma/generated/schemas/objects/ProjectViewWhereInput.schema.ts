import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { HotspotListRelationFilterObjectSchema } from "./HotspotListRelationFilter.schema";
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema";
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { ProjectRelationFilterObjectSchema } from "./ProjectRelationFilter.schema";
import { ProjectWhereInputObjectSchema } from "./ProjectWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProjectViewWhereInputObjectSchema),
        z.lazy(() => ProjectViewWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectViewWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectViewWhereInputObjectSchema),
        z.lazy(() => ProjectViewWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    resourceUrl: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    hotspots: z.lazy(() => HotspotListRelationFilterObjectSchema).optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    order: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    project: z
      .union([
        z.lazy(() => ProjectRelationFilterObjectSchema),
        z.lazy(() => ProjectWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    projectId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const ProjectViewWhereInputObjectSchema = Schema;
