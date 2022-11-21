import { z } from "zod";
import { ProjectCreateManyUserInputObjectSchema } from "./ProjectCreateManyUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => ProjectCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ProjectCreateManyUserInputEnvelopeObjectSchema = Schema;
