import { z } from "zod";
import { ProjectWhereInputObjectSchema } from "./ProjectWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectRelationFilter> = z
  .object({
    is: z
      .lazy(() => ProjectWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ProjectWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ProjectRelationFilterObjectSchema = Schema;
