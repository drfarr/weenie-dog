import { z } from "zod";
import { ProjectViewWhereUniqueInputObjectSchema } from "./ProjectViewWhereUniqueInput.schema";
import { ProjectViewUpdateWithoutProjectInputObjectSchema } from "./ProjectViewUpdateWithoutProjectInput.schema";
import { ProjectViewUncheckedUpdateWithoutProjectInputObjectSchema } from "./ProjectViewUncheckedUpdateWithoutProjectInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewUpdateWithWhereUniqueWithoutProjectInput> =
  z
    .object({
      where: z.lazy(() => ProjectViewWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjectViewUpdateWithoutProjectInputObjectSchema),
        z.lazy(() => ProjectViewUncheckedUpdateWithoutProjectInputObjectSchema),
      ]),
    })
    .strict();

export const ProjectViewUpdateWithWhereUniqueWithoutProjectInputObjectSchema =
  Schema;
