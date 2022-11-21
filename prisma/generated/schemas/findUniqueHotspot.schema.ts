import { z } from "zod";
import { HotspotWhereUniqueInputObjectSchema } from "./objects/HotspotWhereUniqueInput.schema";

export const HotspotFindUniqueSchema = z.object({
  where: HotspotWhereUniqueInputObjectSchema,
});
