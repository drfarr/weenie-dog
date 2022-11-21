import { z } from "zod";
import { HotspotCreateManyInputObjectSchema } from "./objects/HotspotCreateManyInput.schema";

export const HotspotCreateManySchema = z.object({
  data: HotspotCreateManyInputObjectSchema,
});
