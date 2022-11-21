import { z } from "zod";
import { HotspotWhereInputObjectSchema } from "./HotspotWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotListRelationFilter> = z
  .object({
    every: z.lazy(() => HotspotWhereInputObjectSchema).optional(),
    some: z.lazy(() => HotspotWhereInputObjectSchema).optional(),
    none: z.lazy(() => HotspotWhereInputObjectSchema).optional(),
  })
  .strict();

export const HotspotListRelationFilterObjectSchema = Schema;
