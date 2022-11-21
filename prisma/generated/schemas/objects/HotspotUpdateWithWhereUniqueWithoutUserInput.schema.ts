import { z } from "zod";
import { HotspotWhereUniqueInputObjectSchema } from "./HotspotWhereUniqueInput.schema";
import { HotspotUpdateWithoutUserInputObjectSchema } from "./HotspotUpdateWithoutUserInput.schema";
import { HotspotUncheckedUpdateWithoutUserInputObjectSchema } from "./HotspotUncheckedUpdateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => HotspotWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => HotspotUpdateWithoutUserInputObjectSchema),
      z.lazy(() => HotspotUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const HotspotUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
