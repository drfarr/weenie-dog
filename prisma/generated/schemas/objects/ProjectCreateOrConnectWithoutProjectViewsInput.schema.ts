import { z } from "zod";
import { ProjectWhereUniqueInputObjectSchema } from "./ProjectWhereUniqueInput.schema";
import { ProjectCreateWithoutProjectViewsInputObjectSchema } from "./ProjectCreateWithoutProjectViewsInput.schema";
import { ProjectUncheckedCreateWithoutProjectViewsInputObjectSchema } from "./ProjectUncheckedCreateWithoutProjectViewsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutProjectViewsInput> =
  z
    .object({
      where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProjectCreateWithoutProjectViewsInputObjectSchema),
        z.lazy(
          () => ProjectUncheckedCreateWithoutProjectViewsInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProjectCreateOrConnectWithoutProjectViewsInputObjectSchema =
  Schema;
