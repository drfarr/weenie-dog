import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { HotspotOrderByRelationAggregateInputObjectSchema } from "./HotspotOrderByRelationAggregateInput.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";
import { ProjectOrderByWithRelationInputObjectSchema } from "./ProjectOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    resourceUrl: z.lazy(() => SortOrderSchema).optional(),
    hotspots: z
      .lazy(() => HotspotOrderByRelationAggregateInputObjectSchema)
      .optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    project: z
      .lazy(() => ProjectOrderByWithRelationInputObjectSchema)
      .optional(),
    projectId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProjectViewOrderByWithRelationInputObjectSchema = Schema;
