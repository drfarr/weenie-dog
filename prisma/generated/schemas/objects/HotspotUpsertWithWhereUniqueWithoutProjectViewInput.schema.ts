import { z } from "zod";
import { HotspotWhereUniqueInputObjectSchema } from "./HotspotWhereUniqueInput.schema";
import { HotspotUpdateWithoutProjectViewInputObjectSchema } from "./HotspotUpdateWithoutProjectViewInput.schema";
import { HotspotUncheckedUpdateWithoutProjectViewInputObjectSchema } from "./HotspotUncheckedUpdateWithoutProjectViewInput.schema";
import { HotspotCreateWithoutProjectViewInputObjectSchema } from "./HotspotCreateWithoutProjectViewInput.schema";
import { HotspotUncheckedCreateWithoutProjectViewInputObjectSchema } from "./HotspotUncheckedCreateWithoutProjectViewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotUpsertWithWhereUniqueWithoutProjectViewInput> =
  z
    .object({
      where: z.lazy(() => HotspotWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => HotspotUpdateWithoutProjectViewInputObjectSchema),
        z.lazy(() => HotspotUncheckedUpdateWithoutProjectViewInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => HotspotCreateWithoutProjectViewInputObjectSchema),
        z.lazy(() => HotspotUncheckedCreateWithoutProjectViewInputObjectSchema),
      ]),
    })
    .strict();

export const HotspotUpsertWithWhereUniqueWithoutProjectViewInputObjectSchema =
  Schema;
