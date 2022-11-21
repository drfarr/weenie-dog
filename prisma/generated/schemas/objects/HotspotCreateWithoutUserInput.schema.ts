import { z } from "zod";
import { ProjectViewCreateNestedOneWithoutHotspotsInputObjectSchema } from "./ProjectViewCreateNestedOneWithoutHotspotsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    colour: z.string().optional(),
    description: z.string().optional().nullable(),
    x: z.string().optional().nullable(),
    y: z.string().optional().nullable(),
    title: z.string().optional(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
    projectView: z
      .lazy(() => ProjectViewCreateNestedOneWithoutHotspotsInputObjectSchema)
      .optional(),
  })
  .strict();

export const HotspotCreateWithoutUserInputObjectSchema = Schema;
