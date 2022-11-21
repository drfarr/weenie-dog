import { z } from "zod";
import { ProjectViewWhereUniqueInputObjectSchema } from "./ProjectViewWhereUniqueInput.schema";
import { ProjectViewCreateWithoutHotspotsInputObjectSchema } from "./ProjectViewCreateWithoutHotspotsInput.schema";
import { ProjectViewUncheckedCreateWithoutHotspotsInputObjectSchema } from "./ProjectViewUncheckedCreateWithoutHotspotsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewCreateOrConnectWithoutHotspotsInput> =
  z
    .object({
      where: z.lazy(() => ProjectViewWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProjectViewCreateWithoutHotspotsInputObjectSchema),
        z.lazy(
          () => ProjectViewUncheckedCreateWithoutHotspotsInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProjectViewCreateOrConnectWithoutHotspotsInputObjectSchema =
  Schema;
