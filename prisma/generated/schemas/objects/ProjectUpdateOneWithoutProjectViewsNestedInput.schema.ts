import { z } from "zod";
import { ProjectCreateWithoutProjectViewsInputObjectSchema } from "./ProjectCreateWithoutProjectViewsInput.schema";
import { ProjectUncheckedCreateWithoutProjectViewsInputObjectSchema } from "./ProjectUncheckedCreateWithoutProjectViewsInput.schema";
import { ProjectCreateOrConnectWithoutProjectViewsInputObjectSchema } from "./ProjectCreateOrConnectWithoutProjectViewsInput.schema";
import { ProjectUpsertWithoutProjectViewsInputObjectSchema } from "./ProjectUpsertWithoutProjectViewsInput.schema";
import { ProjectWhereUniqueInputObjectSchema } from "./ProjectWhereUniqueInput.schema";
import { ProjectUpdateWithoutProjectViewsInputObjectSchema } from "./ProjectUpdateWithoutProjectViewsInput.schema";
import { ProjectUncheckedUpdateWithoutProjectViewsInputObjectSchema } from "./ProjectUncheckedUpdateWithoutProjectViewsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ProjectUpdateOneWithoutProjectViewsNestedInput> =
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
        upsert: z
          .lazy(() => ProjectUpsertWithoutProjectViewsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        delete: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => ProjectUpdateWithoutProjectViewsInputObjectSchema),
            z.lazy(
              () => ProjectUncheckedUpdateWithoutProjectViewsInputObjectSchema
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const ProjectUpdateOneWithoutProjectViewsNestedInputObjectSchema =
  Schema;
