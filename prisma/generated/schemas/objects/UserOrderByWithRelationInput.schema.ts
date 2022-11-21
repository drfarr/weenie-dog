import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { AccountOrderByRelationAggregateInputObjectSchema } from "./AccountOrderByRelationAggregateInput.schema";
import { SessionOrderByRelationAggregateInputObjectSchema } from "./SessionOrderByRelationAggregateInput.schema";
import { TodoOrderByRelationAggregateInputObjectSchema } from "./TodoOrderByRelationAggregateInput.schema";
import { HotspotOrderByRelationAggregateInputObjectSchema } from "./HotspotOrderByRelationAggregateInput.schema";
import { ProjectViewOrderByRelationAggregateInputObjectSchema } from "./ProjectViewOrderByRelationAggregateInput.schema";
import { ProjectOrderByRelationAggregateInputObjectSchema } from "./ProjectOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    accounts: z
      .lazy(() => AccountOrderByRelationAggregateInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    todos: z
      .lazy(() => TodoOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Hotspot: z
      .lazy(() => HotspotOrderByRelationAggregateInputObjectSchema)
      .optional(),
    ProjectView: z
      .lazy(() => ProjectViewOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Project: z
      .lazy(() => ProjectOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
