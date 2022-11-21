import { z } from "zod";
import { ProjectViewWhereInputObjectSchema } from "./ProjectViewWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewRelationFilter> = z
  .object({
    is: z
      .lazy(() => ProjectViewWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ProjectViewWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ProjectViewRelationFilterObjectSchema = Schema;
