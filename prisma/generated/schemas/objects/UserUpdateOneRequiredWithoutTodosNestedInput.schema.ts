import { z } from "zod";
import { UserCreateWithoutTodosInputObjectSchema } from "./UserCreateWithoutTodosInput.schema";
import { UserUncheckedCreateWithoutTodosInputObjectSchema } from "./UserUncheckedCreateWithoutTodosInput.schema";
import { UserCreateOrConnectWithoutTodosInputObjectSchema } from "./UserCreateOrConnectWithoutTodosInput.schema";
import { UserUpsertWithoutTodosInputObjectSchema } from "./UserUpsertWithoutTodosInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutTodosInputObjectSchema } from "./UserUpdateWithoutTodosInput.schema";
import { UserUncheckedUpdateWithoutTodosInputObjectSchema } from "./UserUncheckedUpdateWithoutTodosInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTodosNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => UserCreateWithoutTodosInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutTodosInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => UserCreateOrConnectWithoutTodosInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => UserUpsertWithoutTodosInputObjectSchema)
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
            z.lazy(() => UserUpdateWithoutTodosInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutTodosInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const UserUpdateOneRequiredWithoutTodosNestedInputObjectSchema = Schema;
