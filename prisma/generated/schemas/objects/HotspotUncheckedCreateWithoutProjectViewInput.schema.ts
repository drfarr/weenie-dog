import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.HotspotUncheckedCreateWithoutProjectViewInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      colour: z.string().optional(),
      description: z.string().optional().nullable(),
      x: z.string().optional().nullable(),
      y: z.string().optional().nullable(),
      title: z.string().optional(),
      updatedAt: z.date().optional(),
      createdAt: z.date().optional(),
    })
    .strict();

export const HotspotUncheckedCreateWithoutProjectViewInputObjectSchema = Schema;
