import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema";
import { AccountListRelationFilterObjectSchema } from "./AccountListRelationFilter.schema";
import { SessionListRelationFilterObjectSchema } from "./SessionListRelationFilter.schema";
import { TodoListRelationFilterObjectSchema } from "./TodoListRelationFilter.schema";
import { HotspotListRelationFilterObjectSchema } from "./HotspotListRelationFilter.schema";
import { ProjectViewListRelationFilterObjectSchema } from "./ProjectViewListRelationFilter.schema";
import { ProjectListRelationFilterObjectSchema } from "./ProjectListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    emailVerified: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
    todos: z.lazy(() => TodoListRelationFilterObjectSchema).optional(),
    Hotspot: z.lazy(() => HotspotListRelationFilterObjectSchema).optional(),
    ProjectView: z
      .lazy(() => ProjectViewListRelationFilterObjectSchema)
      .optional(),
    Project: z.lazy(() => ProjectListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
