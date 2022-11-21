import { z } from "zod";
import { HotspotWhereInputObjectSchema } from "./objects/HotspotWhereInput.schema";
import { HotspotOrderByWithRelationInputObjectSchema } from "./objects/HotspotOrderByWithRelationInput.schema";
import { HotspotWhereUniqueInputObjectSchema } from "./objects/HotspotWhereUniqueInput.schema";

export const HotspotAggregateSchema = z.object({
  where: HotspotWhereInputObjectSchema.optional(),
  orderBy: HotspotOrderByWithRelationInputObjectSchema.optional(),
  cursor: HotspotWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
