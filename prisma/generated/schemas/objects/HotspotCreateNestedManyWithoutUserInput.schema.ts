import { z } from "zod";
import { HotspotCreateWithoutUserInputObjectSchema } from "./HotspotCreateWithoutUserInput.schema";
import { HotspotUncheckedCreateWithoutUserInputObjectSchema } from "./HotspotUncheckedCreateWithoutUserInput.schema";
import { HotspotCreateOrConnectWithoutUserInputObjectSchema } from "./HotspotCreateOrConnectWithoutUserInput.schema";
import { HotspotCreateManyUserInputEnvelopeObjectSchema } from "./HotspotCreateManyUserInputEnvelope.schema";
import { HotspotWhereUniqueInputObjectSchema } from "./HotspotWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotCreateNestedManyWithoutUserInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => HotspotCreateWithoutUserInputObjectSchema),
            z.lazy(() => HotspotCreateWithoutUserInputObjectSchema).array(),
            z.lazy(() => HotspotUncheckedCreateWithoutUserInputObjectSchema),
            z
              .lazy(() => HotspotUncheckedCreateWithoutUserInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => HotspotCreateOrConnectWithoutUserInputObjectSchema),
            z
              .lazy(() => HotspotCreateOrConnectWithoutUserInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => HotspotCreateManyUserInputEnvelopeObjectSchema)
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

export const HotspotCreateNestedManyWithoutUserInputObjectSchema = Schema;
