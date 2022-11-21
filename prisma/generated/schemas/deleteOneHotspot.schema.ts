import { z } from "zod";
import { HotspotWhereUniqueInputObjectSchema } from "./objects/HotspotWhereUniqueInput.schema";

export const HotspotDeleteOneSchema = z.object({
  where: HotspotWhereUniqueInputObjectSchema,
});
