import { z } from "zod";
import { ProjectUpdateWithoutProjectViewsInputObjectSchema } from "./ProjectUpdateWithoutProjectViewsInput.schema";
import { ProjectUncheckedUpdateWithoutProjectViewsInputObjectSchema } from "./ProjectUncheckedUpdateWithoutProjectViewsInput.schema";
import { ProjectCreateWithoutProjectViewsInputObjectSchema } from "./ProjectCreateWithoutProjectViewsInput.schema";
import { ProjectUncheckedCreateWithoutProjectViewsInputObjectSchema } from "./ProjectUncheckedCreateWithoutProjectViewsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectUpsertWithoutProjectViewsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProjectUpdateWithoutProjectViewsInputObjectSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutProjectViewsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutProjectViewsInputObjectSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutProjectViewsInputObjectSchema),
    ]),
  })
  .strict();

export const ProjectUpsertWithoutProjectViewsInputObjectSchema = Schema;
