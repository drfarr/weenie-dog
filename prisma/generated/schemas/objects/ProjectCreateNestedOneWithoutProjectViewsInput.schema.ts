import { z } from "zod";
import { ProjectCreateWithoutProjectViewsInputObjectSchema } from "./ProjectCreateWithoutProjectViewsInput.schema";
import { ProjectUncheckedCreateWithoutProjectViewsInputObjectSchema } from "./ProjectUncheckedCreateWithoutProjectViewsInput.schema";
import { ProjectCreateOrConnectWithoutProjectViewsInputObjectSchema } from "./ProjectCreateOrConnectWithoutProjectViewsInput.schema";
import { ProjectWhereUniqueInputObjectSchema } from "./ProjectWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutProjectViewsInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => ProjectCreateWithoutProjectViewsInputObjectSchema),
            z.lazy(
              () => ProjectUncheckedCreateWithoutProjectViewsInputObjectSchema
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () => ProjectCreateOrConnectWithoutProjectViewsInputObjectSchema
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const ProjectCreateNestedOneWithoutProjectViewsInputObjectSchema =
  Schema;
