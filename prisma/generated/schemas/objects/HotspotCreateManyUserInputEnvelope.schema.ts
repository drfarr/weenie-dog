import { z } from "zod";
import { HotspotCreateManyUserInputObjectSchema } from "./HotspotCreateManyUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => HotspotCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const HotspotCreateManyUserInputEnvelopeObjectSchema = Schema;
