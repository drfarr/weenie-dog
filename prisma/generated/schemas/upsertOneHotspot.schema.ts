import { z } from "zod";
import { HotspotWhereUniqueInputObjectSchema } from "./objects/HotspotWhereUniqueInput.schema";
import { HotspotCreateInputObjectSchema } from "./objects/HotspotCreateInput.schema";
import { HotspotUpdateInputObjectSchema } from "./objects/HotspotUpdateInput.schema";

export const HotspotUpsertSchema = z.object({
  where: HotspotWhereUniqueInputObjectSchema,
  create: HotspotCreateInputObjectSchema,
  update: HotspotUpdateInputObjectSchema,
});
