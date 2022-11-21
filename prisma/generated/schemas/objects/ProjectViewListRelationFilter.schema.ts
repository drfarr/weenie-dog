import { z } from "zod";
import { ProjectViewWhereInputObjectSchema } from "./ProjectViewWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewListRelationFilter> = z
  .object({
    every: z.lazy(() => ProjectViewWhereInputObjectSchema).optional(),
    some: z.lazy(() => ProjectViewWhereInputObjectSchema).optional(),
    none: z.lazy(() => ProjectViewWhereInputObjectSchema).optional(),
  })
  .strict();

export const ProjectViewListRelationFilterObjectSchema = Schema;
