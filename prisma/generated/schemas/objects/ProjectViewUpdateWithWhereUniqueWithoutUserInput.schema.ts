import { z } from "zod";
import { ProjectViewWhereUniqueInputObjectSchema } from "./ProjectViewWhereUniqueInput.schema";
import { ProjectViewUpdateWithoutUserInputObjectSchema } from "./ProjectViewUpdateWithoutUserInput.schema";
import { ProjectViewUncheckedUpdateWithoutUserInputObjectSchema } from "./ProjectViewUncheckedUpdateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ProjectViewWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjectViewUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ProjectViewUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ProjectViewUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
