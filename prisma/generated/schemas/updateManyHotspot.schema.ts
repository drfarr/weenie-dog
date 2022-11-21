import { z } from "zod";
import { HotspotUpdateManyMutationInputObjectSchema } from "./objects/HotspotUpdateManyMutationInput.schema";
import { HotspotWhereInputObjectSchema } from "./objects/HotspotWhereInput.schema";

export const HotspotUpdateManySchema = z.object({
  data: HotspotUpdateManyMutationInputObjectSchema,
  where: HotspotWhereInputObjectSchema.optional(),
});
