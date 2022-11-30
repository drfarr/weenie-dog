import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewAvgOrderByAggregateInput> = z
  .object({
    order: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProjectViewAvgOrderByAggregateInputObjectSchema = Schema;
