import { z } from "zod";
import { ProjectWhereUniqueInputObjectSchema } from "./ProjectWhereUniqueInput.schema";
import { ProjectUpdateWithoutUserInputObjectSchema } from "./ProjectUpdateWithoutUserInput.schema";
import { ProjectUncheckedUpdateWithoutUserInputObjectSchema } from "./ProjectUncheckedUpdateWithoutUserInput.schema";
import { ProjectCreateWithoutUserInputObjectSchema } from "./ProjectCreateWithoutUserInput.schema";
import { ProjectUncheckedCreateWithoutUserInputObjectSchema } from "./ProjectUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ProjectUpdateWithoutUserInputObjectSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutUserInputObjectSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ProjectUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
