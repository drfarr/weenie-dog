import { z } from "zod";
import { ProjectWhereUniqueInputObjectSchema } from "./ProjectWhereUniqueInput.schema";
import { ProjectCreateWithoutUserInputObjectSchema } from "./ProjectCreateWithoutUserInput.schema";
import { ProjectUncheckedCreateWithoutUserInputObjectSchema } from "./ProjectUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutUserInputObjectSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ProjectCreateOrConnectWithoutUserInputObjectSchema = Schema;
