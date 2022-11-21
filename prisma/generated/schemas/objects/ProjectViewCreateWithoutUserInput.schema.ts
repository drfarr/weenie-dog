import { z } from "zod";
import { HotspotCreateNestedManyWithoutProjectViewInputObjectSchema } from "./HotspotCreateNestedManyWithoutProjectViewInput.schema";
import { ProjectCreateNestedOneWithoutProjectViewsInputObjectSchema } from "./ProjectCreateNestedOneWithoutProjectViewsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional().nullable(),
    resourceUrl: z.string().optional().nullable(),
    hotspots: z
      .lazy(() => HotspotCreateNestedManyWithoutProjectViewInputObjectSchema)
      .optional(),
    order: z.number(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
    project: z
      .lazy(() => ProjectCreateNestedOneWithoutProjectViewsInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProjectViewCreateWithoutUserInputObjectSchema = Schema;
