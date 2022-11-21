import { z } from "zod";
import { HotspotWhereUniqueInputObjectSchema } from "./HotspotWhereUniqueInput.schema";
import { HotspotCreateWithoutUserInputObjectSchema } from "./HotspotCreateWithoutUserInput.schema";
import { HotspotUncheckedCreateWithoutUserInputObjectSchema } from "./HotspotUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => HotspotWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => HotspotCreateWithoutUserInputObjectSchema),
      z.lazy(() => HotspotUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const HotspotCreateOrConnectWithoutUserInputObjectSchema = Schema;
