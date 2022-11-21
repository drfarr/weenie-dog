import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutProjectViewsInput> =
  z
    .object({
      id: z.string().optional(),
      description: z.string().optional().nullable(),
      title: z.string().optional(),
      userId: z.string(),
      updatedAt: z.date().optional(),
      createdAt: z.date().optional(),
    })
    .strict();

export const ProjectUncheckedCreateWithoutProjectViewsInputObjectSchema =
  Schema;
