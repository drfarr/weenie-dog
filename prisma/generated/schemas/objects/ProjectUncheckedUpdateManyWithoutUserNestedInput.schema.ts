import { z } from "zod";
import { ProjectCreateWithoutUserInputObjectSchema } from "./ProjectCreateWithoutUserInput.schema";
import { ProjectUncheckedCreateWithoutUserInputObjectSchema } from "./ProjectUncheckedCreateWithoutUserInput.schema";
import { ProjectCreateOrConnectWithoutUserInputObjectSchema } from "./ProjectCreateOrConnectWithoutUserInput.schema";
import { ProjectUpsertWithWhereUniqueWithoutUserInputObjectSchema } from "./ProjectUpsertWithWhereUniqueWithoutUserInput.schema";
import { ProjectCreateManyUserInputEnvelopeObjectSchema } from "./ProjectCreateManyUserInputEnvelope.schema";
import { ProjectWhereUniqueInputObjectSchema } from "./ProjectWhereUniqueInput.schema";
import { ProjectUpdateWithWhereUniqueWithoutUserInputObjectSchema } from "./ProjectUpdateWithWhereUniqueWithoutUserInput.schema";
import { ProjectUpdateManyWithWhereWithoutUserInputObjectSchema } from "./ProjectUpdateManyWithWhereWithoutUserInput.schema";
import { ProjectScalarWhereInputObjectSchema } from "./ProjectScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectUncheckedUpdateManyWithoutUserNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => ProjectCreateWithoutUserInputObjectSchema),
            z.lazy(() => ProjectCreateWithoutUserInputObjectSchema).array(),
            z.lazy(() => ProjectUncheckedCreateWithoutUserInputObjectSchema),
            z
              .lazy(() => ProjectUncheckedCreateWithoutUserInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => ProjectCreateOrConnectWithoutUserInputObjectSchema),
            z
              .lazy(() => ProjectCreateOrConnectWithoutUserInputObjectSchema)
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
              () => ProjectUpsertWithWhereUniqueWithoutUserInputObjectSchema
            ),
            z
              .lazy(
                () => ProjectUpsertWithWhereUniqueWithoutUserInputObjectSchema
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => ProjectCreateManyUserInputEnvelopeObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        set: z
          .union([
            z.lazy(() => ProjectWhereUniqueInputObjectSchema),
            z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => ProjectWhereUniqueInputObjectSchema),
            z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => ProjectWhereUniqueInputObjectSchema),
            z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => ProjectWhereUniqueInputObjectSchema),
            z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => ProjectUpdateWithWhereUniqueWithoutUserInputObjectSchema
            ),
            z
              .lazy(
                () => ProjectUpdateWithWhereUniqueWithoutUserInputObjectSchema
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
              () => ProjectUpdateManyWithWhereWithoutUserInputObjectSchema
            ),
            z
              .lazy(
                () => ProjectUpdateManyWithWhereWithoutUserInputObjectSchema
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
            z.lazy(() => ProjectScalarWhereInputObjectSchema),
            z.lazy(() => ProjectScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const ProjectUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
