import { z } from "zod";
import { ProjectViewCreateManyUserInputObjectSchema } from "./ProjectViewCreateManyUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => ProjectViewCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ProjectViewCreateManyUserInputEnvelopeObjectSchema = Schema;
