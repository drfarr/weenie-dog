import { z } from "zod";
import { HotspotScalarWhereInputObjectSchema } from "./HotspotScalarWhereInput.schema";
import { HotspotUpdateManyMutationInputObjectSchema } from "./HotspotUpdateManyMutationInput.schema";
import { HotspotUncheckedUpdateManyWithoutHotspotsInputObjectSchema } from "./HotspotUncheckedUpdateManyWithoutHotspotsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotUpdateManyWithWhereWithoutProjectViewInput> =
  z
    .object({
      where: z.lazy(() => HotspotScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => HotspotUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => HotspotUncheckedUpdateManyWithoutHotspotsInputObjectSchema
        ),
      ]),
    })
    .strict();

export const HotspotUpdateManyWithWhereWithoutProjectViewInputObjectSchema =
  Schema;
