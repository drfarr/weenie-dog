import { z } from "zod";
import { HotspotCreateWithoutUserInputObjectSchema } from "./HotspotCreateWithoutUserInput.schema";
import { HotspotUncheckedCreateWithoutUserInputObjectSchema } from "./HotspotUncheckedCreateWithoutUserInput.schema";
import { HotspotCreateOrConnectWithoutUserInputObjectSchema } from "./HotspotCreateOrConnectWithoutUserInput.schema";
import { HotspotUpsertWithWhereUniqueWithoutUserInputObjectSchema } from "./HotspotUpsertWithWhereUniqueWithoutUserInput.schema";
import { HotspotCreateManyUserInputEnvelopeObjectSchema } from "./HotspotCreateManyUserInputEnvelope.schema";
import { HotspotWhereUniqueInputObjectSchema } from "./HotspotWhereUniqueInput.schema";
import { HotspotUpdateWithWhereUniqueWithoutUserInputObjectSchema } from "./HotspotUpdateWithWhereUniqueWithoutUserInput.schema";
import { HotspotUpdateManyWithWhereWithoutUserInputObjectSchema } from "./HotspotUpdateManyWithWhereWithoutUserInput.schema";
import { HotspotScalarWhereInputObjectSchema } from "./HotspotScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotUpdateManyWithoutUserNestedInput> =
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
        upsert: z
          .union([
            z.lazy(
              () => HotspotUpsertWithWhereUniqueWithoutUserInputObjectSchema
            ),
            z
              .lazy(
                () => HotspotUpsertWithWhereUniqueWithoutUserInputObjectSchema
              )
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
        set: z
          .union([
            z.lazy(() => HotspotWhereUniqueInputObjectSchema),
            z.lazy(() => HotspotWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => HotspotWhereUniqueInputObjectSchema),
            z.lazy(() => HotspotWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => HotspotWhereUniqueInputObjectSchema),
            z.lazy(() => HotspotWhereUniqueInputObjectSchema).array(),
          ])
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
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => HotspotUpdateWithWhereUniqueWithoutUserInputObjectSchema
            ),
            z
              .lazy(
                () => HotspotUpdateWithWhereUniqueWithoutUserInputObjectSchema
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        updateMany: z
          .union([
            z.lazy(
              () => HotspotUpdateManyWithWhereWithoutUserInputObjectSchema
            ),
            z
              .lazy(
                () => HotspotUpdateManyWithWhereWithoutUserInputObjectSchema
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        deleteMany: z
          .union([
            z.lazy(() => HotspotScalarWhereInputObjectSchema),
            z.lazy(() => HotspotScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const HotspotUpdateManyWithoutUserNestedInputObjectSchema = Schema;
