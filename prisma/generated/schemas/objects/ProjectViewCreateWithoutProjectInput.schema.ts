import { z } from "zod";
import { HotspotCreateNestedManyWithoutProjectViewInputObjectSchema } from "./HotspotCreateNestedManyWithoutProjectViewInput.schema";
import { UserCreateNestedOneWithoutProjectViewInputObjectSchema } from "./UserCreateNestedOneWithoutProjectViewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectViewCreateWithoutProjectInput> = z
  .object({
    id: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional().nullable(),
    resourceUrl: z.string().optional().nullable(),
    hotspots: z
      .lazy(() => HotspotCreateNestedManyWithoutProjectViewInputObjectSchema)
      .optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutProjectViewInputObjectSchema),
    order: z.number(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
  })
  .strict();

export const ProjectViewCreateWithoutProjectInputObjectSchema = Schema;
