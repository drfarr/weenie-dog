import { z } from "zod";
import { ProjectViewWhereUniqueInputObjectSchema } from "./ProjectViewWhereUniqueInput.schema";
import { ProjectViewCreateWithoutProjectInputObjectSchema } from "./ProjectViewCreateWithoutProjectInput.schema";
import { ProjectViewUncheckedCreateWithoutProjectInputObjectSchema } from "./ProjectViewUncheckedCreateWithoutProjectInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewCreateOrConnectWithoutProjectInput> =
  z
    .object({
      where: z.lazy(() => ProjectViewWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProjectViewCreateWithoutProjectInputObjectSchema),
        z.lazy(() => ProjectViewUncheckedCreateWithoutProjectInputObjectSchema),
      ]),
    })
    .strict();

export const ProjectViewCreateOrConnectWithoutProjectInputObjectSchema = Schema;
