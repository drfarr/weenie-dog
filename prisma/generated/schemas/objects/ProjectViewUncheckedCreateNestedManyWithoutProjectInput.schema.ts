import { z } from "zod";
import { ProjectViewCreateWithoutProjectInputObjectSchema } from "./ProjectViewCreateWithoutProjectInput.schema";
import { ProjectViewUncheckedCreateWithoutProjectInputObjectSchema } from "./ProjectViewUncheckedCreateWithoutProjectInput.schema";
import { ProjectViewCreateOrConnectWithoutProjectInputObjectSchema } from "./ProjectViewCreateOrConnectWithoutProjectInput.schema";
import { ProjectViewCreateManyProjectInputEnvelopeObjectSchema } from "./ProjectViewCreateManyProjectInputEnvelope.schema";
import { ProjectViewWhereUniqueInputObjectSchema } from "./ProjectViewWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewUncheckedCreateNestedManyWithoutProjectInput> =
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
        createMany: z
          .lazy(() => ProjectViewCreateManyProjectInputEnvelopeObjectSchema)
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

export const ProjectViewUncheckedCreateNestedManyWithoutProjectInputObjectSchema =
  Schema;
