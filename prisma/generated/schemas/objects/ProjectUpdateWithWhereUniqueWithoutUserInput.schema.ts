import { z } from "zod";
import { ProjectWhereUniqueInputObjectSchema } from "./ProjectWhereUniqueInput.schema";
import { ProjectUpdateWithoutUserInputObjectSchema } from "./ProjectUpdateWithoutUserInput.schema";
import { ProjectUncheckedUpdateWithoutUserInputObjectSchema } from "./ProjectUncheckedUpdateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ProjectUpdateWithoutUserInputObjectSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ProjectUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
