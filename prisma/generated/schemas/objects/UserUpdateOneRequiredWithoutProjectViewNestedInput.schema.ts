import { z } from "zod";
import { UserCreateWithoutProjectViewInputObjectSchema } from "./UserCreateWithoutProjectViewInput.schema";
import { UserUncheckedCreateWithoutProjectViewInputObjectSchema } from "./UserUncheckedCreateWithoutProjectViewInput.schema";
import { UserCreateOrConnectWithoutProjectViewInputObjectSchema } from "./UserCreateOrConnectWithoutProjectViewInput.schema";
import { UserUpsertWithoutProjectViewInputObjectSchema } from "./UserUpsertWithoutProjectViewInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutProjectViewInputObjectSchema } from "./UserUpdateWithoutProjectViewInput.schema";
import { UserUncheckedUpdateWithoutProjectViewInputObjectSchema } from "./UserUncheckedUpdateWithoutProjectViewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutProjectViewNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => UserCreateWithoutProjectViewInputObjectSchema),
            z.lazy(
              () => UserUncheckedCreateWithoutProjectViewInputObjectSchema
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => UserCreateOrConnectWithoutProjectViewInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => UserUpsertWithoutProjectViewInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => UserUpdateWithoutProjectViewInputObjectSchema),
            z.lazy(
              () => UserUncheckedUpdateWithoutProjectViewInputObjectSchema
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const UserUpdateOneRequiredWithoutProjectViewNestedInputObjectSchema =
  Schema;
