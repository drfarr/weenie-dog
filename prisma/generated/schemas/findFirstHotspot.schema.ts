import { z } from "zod";
import { HotspotWhereInputObjectSchema } from "./objects/HotspotWhereInput.schema";
import { HotspotOrderByWithRelationInputObjectSchema } from "./objects/HotspotOrderByWithRelationInput.schema";
import { HotspotWhereUniqueInputObjectSchema } from "./objects/HotspotWhereUniqueInput.schema";
import { HotspotScalarFieldEnumSchema } from "./enums/HotspotScalarFieldEnum.schema";

export const HotspotFindFirstSchema = z.object({
  where: HotspotWhereInputObjectSchema.optional(),
  orderBy: HotspotOrderByWithRelationInputObjectSchema.optional(),
  cursor: HotspotWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(HotspotScalarFieldEnumSchema).optional(),
});
