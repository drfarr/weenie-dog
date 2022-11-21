import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { HotspotCountOrderByAggregateInputObjectSchema } from "./HotspotCountOrderByAggregateInput.schema";
import { HotspotMaxOrderByAggregateInputObjectSchema } from "./HotspotMaxOrderByAggregateInput.schema";
import { HotspotMinOrderByAggregateInputObjectSchema } from "./HotspotMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    colour: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    x: z.lazy(() => SortOrderSchema).optional(),
    y: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    projectViewId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => HotspotCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => HotspotMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => HotspotMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const HotspotOrderByWithAggregationInputObjectSchema = Schema;
