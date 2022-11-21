import { z } from "zod";
import { ProjectViewWhereUniqueInputObjectSchema } from "./ProjectViewWhereUniqueInput.schema";
import { ProjectViewUpdateWithoutProjectInputObjectSchema } from "./ProjectViewUpdateWithoutProjectInput.schema";
import { ProjectViewUncheckedUpdateWithoutProjectInputObjectSchema } from "./ProjectViewUncheckedUpdateWithoutProjectInput.schema";
import { ProjectViewCreateWithoutProjectInputObjectSchema } from "./ProjectViewCreateWithoutProjectInput.schema";
import { ProjectViewUncheckedCreateWithoutProjectInputObjectSchema } from "./ProjectViewUncheckedCreateWithoutProjectInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewUpsertWithWhereUniqueWithoutProjectInput> =
  z
    .object({
      where: z.lazy(() => ProjectViewWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProjectViewUpdateWithoutProjectInputObjectSchema),
        z.lazy(() => ProjectViewUncheckedUpdateWithoutProjectInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProjectViewCreateWithoutProjectInputObjectSchema),
        z.lazy(() => ProjectViewUncheckedCreateWithoutProjectInputObjectSchema),
      ]),
    })
    .strict();

export const ProjectViewUpsertWithWhereUniqueWithoutProjectInputObjectSchema =
  Schema;
