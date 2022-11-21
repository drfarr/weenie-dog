import { z } from "zod";
import { HotspotWhereInputObjectSchema } from "./objects/HotspotWhereInput.schema";
import { HotspotOrderByWithAggregationInputObjectSchema } from "./objects/HotspotOrderByWithAggregationInput.schema";
import { HotspotScalarWhereWithAggregatesInputObjectSchema } from "./objects/HotspotScalarWhereWithAggregatesInput.schema";
import { HotspotScalarFieldEnumSchema } from "./enums/HotspotScalarFieldEnum.schema";

export const HotspotGroupBySchema = z.object({
  where: HotspotWhereInputObjectSchema.optional(),
  orderBy: HotspotOrderByWithAggregationInputObjectSchema,
  having: HotspotScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(HotspotScalarFieldEnumSchema),
});
