import { z } from "zod";
import { HotspotScalarWhereInputObjectSchema } from "./HotspotScalarWhereInput.schema";
import { HotspotUpdateManyMutationInputObjectSchema } from "./HotspotUpdateManyMutationInput.schema";
import { HotspotUncheckedUpdateManyWithoutHotspotInputObjectSchema } from "./HotspotUncheckedUpdateManyWithoutHotspotInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => HotspotScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => HotspotUpdateManyMutationInputObjectSchema),
      z.lazy(() => HotspotUncheckedUpdateManyWithoutHotspotInputObjectSchema),
    ]),
  })
  .strict();

export const HotspotUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
