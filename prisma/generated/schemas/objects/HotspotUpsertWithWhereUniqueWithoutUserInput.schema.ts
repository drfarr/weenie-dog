import { z } from "zod";
import { HotspotWhereUniqueInputObjectSchema } from "./HotspotWhereUniqueInput.schema";
import { HotspotUpdateWithoutUserInputObjectSchema } from "./HotspotUpdateWithoutUserInput.schema";
import { HotspotUncheckedUpdateWithoutUserInputObjectSchema } from "./HotspotUncheckedUpdateWithoutUserInput.schema";
import { HotspotCreateWithoutUserInputObjectSchema } from "./HotspotCreateWithoutUserInput.schema";
import { HotspotUncheckedCreateWithoutUserInputObjectSchema } from "./HotspotUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => HotspotWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => HotspotUpdateWithoutUserInputObjectSchema),
      z.lazy(() => HotspotUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => HotspotCreateWithoutUserInputObjectSchema),
      z.lazy(() => HotspotUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const HotspotUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
