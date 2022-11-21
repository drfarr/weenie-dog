import { z } from "zod";
import { HotspotCreateWithoutProjectViewInputObjectSchema } from "./HotspotCreateWithoutProjectViewInput.schema";
import { HotspotUncheckedCreateWithoutProjectViewInputObjectSchema } from "./HotspotUncheckedCreateWithoutProjectViewInput.schema";
import { HotspotCreateOrConnectWithoutProjectViewInputObjectSchema } from "./HotspotCreateOrConnectWithoutProjectViewInput.schema";
import { HotspotUpsertWithWhereUniqueWithoutProjectViewInputObjectSchema } from "./HotspotUpsertWithWhereUniqueWithoutProjectViewInput.schema";
import { HotspotCreateManyProjectViewInputEnvelopeObjectSchema } from "./HotspotCreateManyProjectViewInputEnvelope.schema";
import { HotspotWhereUniqueInputObjectSchema } from "./HotspotWhereUniqueInput.schema";
import { HotspotUpdateWithWhereUniqueWithoutProjectViewInputObjectSchema } from "./HotspotUpdateWithWhereUniqueWithoutProjectViewInput.schema";
import { HotspotUpdateManyWithWhereWithoutProjectViewInputObjectSchema } from "./HotspotUpdateManyWithWhereWithoutProjectViewInput.schema";
import { HotspotScalarWhereInputObjectSchema } from "./HotspotScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotUncheckedUpdateManyWithoutProjectViewNestedInput> =
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
        upsert: z
          .union([
            z.lazy(
              () =>
                HotspotUpsertWithWhereUniqueWithoutProjectViewInputObjectSchema
            ),
            z
              .lazy(
                () =>
                  HotspotUpsertWithWhereUniqueWithoutProjectViewInputObjectSchema
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
              () =>
                HotspotUpdateWithWhereUniqueWithoutProjectViewInputObjectSchema
            ),
            z
              .lazy(
                () =>
                  HotspotUpdateWithWhereUniqueWithoutProjectViewInputObjectSchema
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
              () =>
                HotspotUpdateManyWithWhereWithoutProjectViewInputObjectSchema
            ),
            z
              .lazy(
                () =>
                  HotspotUpdateManyWithWhereWithoutProjectViewInputObjectSchema
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

export const HotspotUncheckedUpdateManyWithoutProjectViewNestedInputObjectSchema =
  Schema;
