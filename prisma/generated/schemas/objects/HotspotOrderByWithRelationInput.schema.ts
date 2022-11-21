import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";
import { ProjectViewOrderByWithRelationInputObjectSchema } from "./ProjectViewOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    colour: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    x: z.lazy(() => SortOrderSchema).optional(),
    y: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    projectView: z
      .lazy(() => ProjectViewOrderByWithRelationInputObjectSchema)
      .optional(),
    projectViewId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const HotspotOrderByWithRelationInputObjectSchema = Schema;
