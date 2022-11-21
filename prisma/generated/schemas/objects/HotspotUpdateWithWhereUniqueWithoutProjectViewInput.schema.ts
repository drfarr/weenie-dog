import { z } from "zod";
import { HotspotWhereUniqueInputObjectSchema } from "./HotspotWhereUniqueInput.schema";
import { HotspotUpdateWithoutProjectViewInputObjectSchema } from "./HotspotUpdateWithoutProjectViewInput.schema";
import { HotspotUncheckedUpdateWithoutProjectViewInputObjectSchema } from "./HotspotUncheckedUpdateWithoutProjectViewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotUpdateWithWhereUniqueWithoutProjectViewInput> =
  z
    .object({
      where: z.lazy(() => HotspotWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => HotspotUpdateWithoutProjectViewInputObjectSchema),
        z.lazy(() => HotspotUncheckedUpdateWithoutProjectViewInputObjectSchema),
      ]),
    })
    .strict();

export const HotspotUpdateWithWhereUniqueWithoutProjectViewInputObjectSchema =
  Schema;
