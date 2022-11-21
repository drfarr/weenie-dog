import { z } from "zod";
import { HotspotCreateInputObjectSchema } from "./objects/HotspotCreateInput.schema";

export const HotspotCreateOneSchema = z.object({
  data: HotspotCreateInputObjectSchema,
});
