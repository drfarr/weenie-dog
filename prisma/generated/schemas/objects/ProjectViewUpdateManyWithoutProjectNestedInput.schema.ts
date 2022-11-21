import { z } from "zod";
import { ProjectViewCreateWithoutProjectInputObjectSchema } from "./ProjectViewCreateWithoutProjectInput.schema";
import { ProjectViewUncheckedCreateWithoutProjectInputObjectSchema } from "./ProjectViewUncheckedCreateWithoutProjectInput.schema";
import { ProjectViewCreateOrConnectWithoutProjectInputObjectSchema } from "./ProjectViewCreateOrConnectWithoutProjectInput.schema";
import { ProjectViewUpsertWithWhereUniqueWithoutProjectInputObjectSchema } from "./ProjectViewUpsertWithWhereUniqueWithoutProjectInput.schema";
import { ProjectViewCreateManyProjectInputEnvelopeObjectSchema } from "./ProjectViewCreateManyProjectInputEnvelope.schema";
import { ProjectViewWhereUniqueInputObjectSchema } from "./ProjectViewWhereUniqueInput.schema";
import { ProjectViewUpdateWithWhereUniqueWithoutProjectInputObjectSchema } from "./ProjectViewUpdateWithWhereUniqueWithoutProjectInput.schema";
import { ProjectViewUpdateManyWithWhereWithoutProjectInputObjectSchema } from "./ProjectViewUpdateManyWithWhereWithoutProjectInput.schema";
import { ProjectViewScalarWhereInputObjectSchema } from "./ProjectViewScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewUpdateManyWithoutProjectNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => ProjectViewCreateWithoutProjectInputObjectSchema),
            z
              .lazy(() => ProjectViewCreateWithoutProjectInputObjectSchema)
              .array(),
            z.lazy(
              () => ProjectViewUncheckedCreateWithoutProjectInputObjectSchema
            ),
            z
              .lazy(
                () => ProjectViewUncheckedCreateWithoutProjectInputObjectSchema
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
              () => ProjectViewCreateOrConnectWithoutProjectInputObjectSchema
            ),
            z
              .lazy(
                () => ProjectViewCreateOrConnectWithoutProjectInputObjectSchema
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
                ProjectViewUpsertWithWhereUniqueWithoutProjectInputObjectSchema
            ),
            z
              .lazy(
                () =>
                  ProjectViewUpsertWithWhereUniqueWithoutProjectInputObjectSchema
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => ProjectViewCreateManyProjectInputEnvelopeObjectSchema)
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
              () =>
                ProjectViewUpdateWithWhereUniqueWithoutProjectInputObjectSchema
            ),
            z
              .lazy(
                () =>
                  ProjectViewUpdateWithWhereUniqueWithoutProjectInputObjectSchema
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
                ProjectViewUpdateManyWithWhereWithoutProjectInputObjectSchema
            ),
            z
              .lazy(
                () =>
                  ProjectViewUpdateManyWithWhereWithoutProjectInputObjectSchema
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

export const ProjectViewUpdateManyWithoutProjectNestedInputObjectSchema =
  Schema;
