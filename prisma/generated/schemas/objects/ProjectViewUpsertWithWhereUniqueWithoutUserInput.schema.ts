import { z } from "zod";
import { ProjectViewWhereUniqueInputObjectSchema } from "./ProjectViewWhereUniqueInput.schema";
import { ProjectViewUpdateWithoutUserInputObjectSchema } from "./ProjectViewUpdateWithoutUserInput.schema";
import { ProjectViewUncheckedUpdateWithoutUserInputObjectSchema } from "./ProjectViewUncheckedUpdateWithoutUserInput.schema";
import { ProjectViewCreateWithoutUserInputObjectSchema } from "./ProjectViewCreateWithoutUserInput.schema";
import { ProjectViewUncheckedCreateWithoutUserInputObjectSchema } from "./ProjectViewUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ProjectViewWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProjectViewUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ProjectViewUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProjectViewCreateWithoutUserInputObjectSchema),
        z.lazy(() => ProjectViewUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ProjectViewUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
