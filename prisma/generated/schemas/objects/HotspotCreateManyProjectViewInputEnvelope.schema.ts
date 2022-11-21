import { z } from "zod";
import { HotspotCreateManyProjectViewInputObjectSchema } from "./HotspotCreateManyProjectViewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotCreateManyProjectViewInputEnvelope> = z
  .object({
    data: z.lazy(() => HotspotCreateManyProjectViewInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const HotspotCreateManyProjectViewInputEnvelopeObjectSchema = Schema;
