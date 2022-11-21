import { z } from "zod";
import { HotspotWhereInputObjectSchema } from "./objects/HotspotWhereInput.schema";

export const HotspotDeleteManySchema = z.object({
  where: HotspotWhereInputObjectSchema.optional(),
});
