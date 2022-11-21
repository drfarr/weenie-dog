import { z } from "zod";
import { HotspotWhereUniqueInputObjectSchema } from "./HotspotWhereUniqueInput.schema";
import { HotspotCreateWithoutProjectViewInputObjectSchema } from "./HotspotCreateWithoutProjectViewInput.schema";
import { HotspotUncheckedCreateWithoutProjectViewInputObjectSchema } from "./HotspotUncheckedCreateWithoutProjectViewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotCreateOrConnectWithoutProjectViewInput> =
  z
    .object({
      where: z.lazy(() => HotspotWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => HotspotCreateWithoutProjectViewInputObjectSchema),
        z.lazy(() => HotspotUncheckedCreateWithoutProjectViewInputObjectSchema),
      ]),
    })
    .strict();

export const HotspotCreateOrConnectWithoutProjectViewInputObjectSchema = Schema;
