import { z } from "zod";
import { ProjectViewWhereUniqueInputObjectSchema } from "./ProjectViewWhereUniqueInput.schema";
import { ProjectViewCreateWithoutUserInputObjectSchema } from "./ProjectViewCreateWithoutUserInput.schema";
import { ProjectViewUncheckedCreateWithoutUserInputObjectSchema } from "./ProjectViewUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => ProjectViewWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProjectViewCreateWithoutUserInputObjectSchema),
      z.lazy(() => ProjectViewUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ProjectViewCreateOrConnectWithoutUserInputObjectSchema = Schema;
