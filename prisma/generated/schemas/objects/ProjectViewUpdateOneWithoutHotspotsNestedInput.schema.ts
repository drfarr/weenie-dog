import { z } from "zod";
import { ProjectViewCreateWithoutHotspotsInputObjectSchema } from "./ProjectViewCreateWithoutHotspotsInput.schema";
import { ProjectViewUncheckedCreateWithoutHotspotsInputObjectSchema } from "./ProjectViewUncheckedCreateWithoutHotspotsInput.schema";
import { ProjectViewCreateOrConnectWithoutHotspotsInputObjectSchema } from "./ProjectViewCreateOrConnectWithoutHotspotsInput.schema";
import { ProjectViewUpsertWithoutHotspotsInputObjectSchema } from "./ProjectViewUpsertWithoutHotspotsInput.schema";
import { ProjectViewWhereUniqueInputObjectSchema } from "./ProjectViewWhereUniqueInput.schema";
import { ProjectViewUpdateWithoutHotspotsInputObjectSchema } from "./ProjectViewUpdateWithoutHotspotsInput.schema";
import { ProjectViewUncheckedUpdateWithoutHotspotsInputObjectSchema } from "./ProjectViewUncheckedUpdateWithoutHotspotsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewUpdateOneWithoutHotspotsNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => ProjectViewCreateWithoutHotspotsInputObjectSchema),
            z.lazy(
              () => ProjectViewUncheckedCreateWithoutHotspotsInputObjectSchema
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () => ProjectViewCreateOrConnectWithoutHotspotsInputObjectSchema
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => ProjectViewUpsertWithoutHotspotsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        delete: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .lazy(() => ProjectViewWhereUniqueInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => ProjectViewUpdateWithoutHotspotsInputObjectSchema),
            z.lazy(
              () => ProjectViewUncheckedUpdateWithoutHotspotsInputObjectSchema
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const ProjectViewUpdateOneWithoutHotspotsNestedInputObjectSchema =
  Schema;
