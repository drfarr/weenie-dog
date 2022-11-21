import { z } from "zod";
import { ProjectViewUpdateWithoutHotspotsInputObjectSchema } from "./ProjectViewUpdateWithoutHotspotsInput.schema";
import { ProjectViewUncheckedUpdateWithoutHotspotsInputObjectSchema } from "./ProjectViewUncheckedUpdateWithoutHotspotsInput.schema";
import { ProjectViewCreateWithoutHotspotsInputObjectSchema } from "./ProjectViewCreateWithoutHotspotsInput.schema";
import { ProjectViewUncheckedCreateWithoutHotspotsInputObjectSchema } from "./ProjectViewUncheckedCreateWithoutHotspotsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewUpsertWithoutHotspotsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProjectViewUpdateWithoutHotspotsInputObjectSchema),
      z.lazy(() => ProjectViewUncheckedUpdateWithoutHotspotsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProjectViewCreateWithoutHotspotsInputObjectSchema),
      z.lazy(() => ProjectViewUncheckedCreateWithoutHotspotsInputObjectSchema),
    ]),
  })
  .strict();

export const ProjectViewUpsertWithoutHotspotsInputObjectSchema = Schema;
