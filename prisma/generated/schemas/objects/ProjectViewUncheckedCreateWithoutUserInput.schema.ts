import { z } from "zod";
import { HotspotUncheckedCreateNestedManyWithoutProjectViewInputObjectSchema } from "./HotspotUncheckedCreateNestedManyWithoutProjectViewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional().nullable(),
    resourceUrl: z.string().optional().nullable(),
    hotspots: z
      .lazy(
        () =>
          HotspotUncheckedCreateNestedManyWithoutProjectViewInputObjectSchema
      )
      .optional(),
    order: z.number(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
    projectId: z.string().optional().nullable(),
  })
  .strict();

export const ProjectViewUncheckedCreateWithoutUserInputObjectSchema = Schema;
