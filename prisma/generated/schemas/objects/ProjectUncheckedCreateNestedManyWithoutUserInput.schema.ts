import { z } from "zod";
import { ProjectCreateWithoutUserInputObjectSchema } from "./ProjectCreateWithoutUserInput.schema";
import { ProjectUncheckedCreateWithoutUserInputObjectSchema } from "./ProjectUncheckedCreateWithoutUserInput.schema";
import { ProjectCreateOrConnectWithoutUserInputObjectSchema } from "./ProjectCreateOrConnectWithoutUserInput.schema";
import { ProjectCreateManyUserInputEnvelopeObjectSchema } from "./ProjectCreateManyUserInputEnvelope.schema";
import { ProjectWhereUniqueInputObjectSchema } from "./ProjectWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectUncheckedCreateNestedManyWithoutUserInput> =
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
        createMany: z
          .lazy(() => ProjectCreateManyUserInputEnvelopeObjectSchema)
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
  ]);

export const ProjectUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
