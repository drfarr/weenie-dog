import { z } from "zod";
import { ProjectViewCreateWithoutHotspotsInputObjectSchema } from "./ProjectViewCreateWithoutHotspotsInput.schema";
import { ProjectViewUncheckedCreateWithoutHotspotsInputObjectSchema } from "./ProjectViewUncheckedCreateWithoutHotspotsInput.schema";
import { ProjectViewCreateOrConnectWithoutHotspotsInputObjectSchema } from "./ProjectViewCreateOrConnectWithoutHotspotsInput.schema";
import { ProjectViewWhereUniqueInputObjectSchema } from "./ProjectViewWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewCreateNestedOneWithoutHotspotsInput> =
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
        connect: z
          .lazy(() => ProjectViewWhereUniqueInputObjectSchema)
          .optional(),
      })
      .strict(),
  ]);

export const ProjectViewCreateNestedOneWithoutHotspotsInputObjectSchema =
  Schema;
