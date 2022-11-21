import { z } from "zod";
import { HotspotCreateWithoutProjectViewInputObjectSchema } from "./HotspotCreateWithoutProjectViewInput.schema";
import { HotspotUncheckedCreateWithoutProjectViewInputObjectSchema } from "./HotspotUncheckedCreateWithoutProjectViewInput.schema";
import { HotspotCreateOrConnectWithoutProjectViewInputObjectSchema } from "./HotspotCreateOrConnectWithoutProjectViewInput.schema";
import { HotspotCreateManyProjectViewInputEnvelopeObjectSchema } from "./HotspotCreateManyProjectViewInputEnvelope.schema";
import { HotspotWhereUniqueInputObjectSchema } from "./HotspotWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotUncheckedCreateNestedManyWithoutProjectViewInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => HotspotCreateWithoutProjectViewInputObjectSchema),
            z
              .lazy(() => HotspotCreateWithoutProjectViewInputObjectSchema)
              .array(),
            z.lazy(
              () => HotspotUncheckedCreateWithoutProjectViewInputObjectSchema
            ),
            z
              .lazy(
                () => HotspotUncheckedCreateWithoutProjectViewInputObjectSchema
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(
              () => HotspotCreateOrConnectWithoutProjectViewInputObjectSchema
            ),
            z
              .lazy(
                () => HotspotCreateOrConnectWithoutProjectViewInputObjectSchema
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => HotspotCreateManyProjectViewInputEnvelopeObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => HotspotWhereUniqueInputObjectSchema),
            z.lazy(() => HotspotWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const HotspotUncheckedCreateNestedManyWithoutProjectViewInputObjectSchema =
  Schema;
