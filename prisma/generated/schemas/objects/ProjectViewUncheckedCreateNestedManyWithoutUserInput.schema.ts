import { z } from "zod";
import { ProjectViewCreateWithoutUserInputObjectSchema } from "./ProjectViewCreateWithoutUserInput.schema";
import { ProjectViewUncheckedCreateWithoutUserInputObjectSchema } from "./ProjectViewUncheckedCreateWithoutUserInput.schema";
import { ProjectViewCreateOrConnectWithoutUserInputObjectSchema } from "./ProjectViewCreateOrConnectWithoutUserInput.schema";
import { ProjectViewCreateManyUserInputEnvelopeObjectSchema } from "./ProjectViewCreateManyUserInputEnvelope.schema";
import { ProjectViewWhereUniqueInputObjectSchema } from "./ProjectViewWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewUncheckedCreateNestedManyWithoutUserInput> =
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
        createMany: z
          .lazy(() => ProjectViewCreateManyUserInputEnvelopeObjectSchema)
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
  ]);

export const ProjectViewUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
