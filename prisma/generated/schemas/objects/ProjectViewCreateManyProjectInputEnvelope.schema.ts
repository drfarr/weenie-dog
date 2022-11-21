import { z } from "zod";
import { ProjectViewCreateManyProjectInputObjectSchema } from "./ProjectViewCreateManyProjectInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewCreateManyProjectInputEnvelope> = z
  .object({
    data: z.lazy(() => ProjectViewCreateManyProjectInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ProjectViewCreateManyProjectInputEnvelopeObjectSchema = Schema;
