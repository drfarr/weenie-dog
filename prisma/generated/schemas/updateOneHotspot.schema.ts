import { z } from "zod";
import { HotspotUpdateInputObjectSchema } from "./objects/HotspotUpdateInput.schema";
import { HotspotWhereUniqueInputObjectSchema } from "./objects/HotspotWhereUniqueInput.schema";

export const HotspotUpdateOneSchema = z.object({
  data: HotspotUpdateInputObjectSchema,
  where: HotspotWhereUniqueInputObjectSchema,
});
