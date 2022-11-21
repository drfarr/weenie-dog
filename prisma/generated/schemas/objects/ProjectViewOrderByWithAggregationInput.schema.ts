import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { ProjectViewCountOrderByAggregateInputObjectSchema } from "./ProjectViewCountOrderByAggregateInput.schema";
import { ProjectViewAvgOrderByAggregateInputObjectSchema } from "./ProjectViewAvgOrderByAggregateInput.schema";
import { ProjectViewMaxOrderByAggregateInputObjectSchema } from "./ProjectViewMaxOrderByAggregateInput.schema";
import { ProjectViewMinOrderByAggregateInputObjectSchema } from "./ProjectViewMinOrderByAggregateInput.schema";
import { ProjectViewSumOrderByAggregateInputObjectSchema } from "./ProjectViewSumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    resourceUrl: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    projectId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProjectViewCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ProjectViewAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ProjectViewMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ProjectViewMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ProjectViewSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProjectViewOrderByWithAggregationInputObjectSchema = Schema;
