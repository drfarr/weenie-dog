import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { ProjectViewOrderByRelationAggregateInputObjectSchema } from "./ProjectViewOrderByRelationAggregateInput.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    projectViews: z
      .lazy(() => ProjectViewOrderByRelationAggregateInputObjectSchema)
      .optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProjectOrderByWithRelationInputObjectSchema = Schema;
