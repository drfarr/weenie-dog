import { z } from "zod";
import { ProjectViewCreateWithoutUserInputObjectSchema } from "./ProjectViewCreateWithoutUserInput.schema";
import { ProjectViewUncheckedCreateWithoutUserInputObjectSchema } from "./ProjectViewUncheckedCreateWithoutUserInput.schema";
import { ProjectViewCreateOrConnectWithoutUserInputObjectSchema } from "./ProjectViewCreateOrConnectWithoutUserInput.schema";
import { ProjectViewUpsertWithWhereUniqueWithoutUserInputObjectSchema } from "./ProjectViewUpsertWithWhereUniqueWithoutUserInput.schema";
import { ProjectViewCreateManyUserInputEnvelopeObjectSchema } from "./ProjectViewCreateManyUserInputEnvelope.schema";
import { ProjectViewWhereUniqueInputObjectSchema } from "./ProjectViewWhereUniqueInput.schema";
import { ProjectViewUpdateWithWhereUniqueWithoutUserInputObjectSchema } from "./ProjectViewUpdateWithWhereUniqueWithoutUserInput.schema";
import { ProjectViewUpdateManyWithWhereWithoutUserInputObjectSchema } from "./ProjectViewUpdateManyWithWhereWithoutUserInput.schema";
import { ProjectViewScalarWhereInputObjectSchema } from "./ProjectViewScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewUpdateManyWithoutUserNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => ProjectViewCreateWithoutUserInputObjectSchema),
            z.lazy(() => ProjectViewCreateWithoutUserInputObjectSchema).array(),
            z.lazy(
              () => ProjectViewUncheckedCreateWithoutUserInputObjectSchema
            ),
            z
              .lazy(
                () => ProjectViewUncheckedCreateWithoutUserInputObjectSchema
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
              () => ProjectViewCreateOrConnectWithoutUserInputObjectSchema
            ),
            z
              .lazy(
                () => ProjectViewCreateOrConnectWithoutUserInputObjectSchema
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
              () => ProjectViewUpsertWithWhereUniqueWithoutUserInputObjectSchema
            ),
            z
              .lazy(
                () =>
                  ProjectViewUpsertWithWhereUniqueWithoutUserInputObjectSchema
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => ProjectViewCreateManyUserInputEnvelopeObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        set: z
          .union([
            z.lazy(() => ProjectViewWhereUniqueInputObjectSchema),
            z.lazy(() => ProjectViewWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => ProjectViewWhereUniqueInputObjectSchema),
            z.lazy(() => ProjectViewWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => ProjectViewWhereUniqueInputObjectSchema),
            z.lazy(() => ProjectViewWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => ProjectViewWhereUniqueInputObjectSchema),
            z.lazy(() => ProjectViewWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => ProjectViewUpdateWithWhereUniqueWithoutUserInputObjectSchema
            ),
            z
              .lazy(
                () =>
                  ProjectViewUpdateWithWhereUniqueWithoutUserInputObjectSchema
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
              () => ProjectViewUpdateManyWithWhereWithoutUserInputObjectSchema
            ),
            z
              .lazy(
                () => ProjectViewUpdateManyWithWhereWithoutUserInputObjectSchema
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
            z.lazy(() => ProjectViewScalarWhereInputObjectSchema),
            z.lazy(() => ProjectViewScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const ProjectViewUpdateManyWithoutUserNestedInputObjectSchema = Schema;
