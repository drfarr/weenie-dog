import { z } from "zod";
import { UserCreateWithoutProjectInputObjectSchema } from "./UserCreateWithoutProjectInput.schema";
import { UserUncheckedCreateWithoutProjectInputObjectSchema } from "./UserUncheckedCreateWithoutProjectInput.schema";
import { UserCreateOrConnectWithoutProjectInputObjectSchema } from "./UserCreateOrConnectWithoutProjectInput.schema";
import { UserUpsertWithoutProjectInputObjectSchema } from "./UserUpsertWithoutProjectInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutProjectInputObjectSchema } from "./UserUpdateWithoutProjectInput.schema";
import { UserUncheckedUpdateWithoutProjectInputObjectSchema } from "./UserUncheckedUpdateWithoutProjectInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutProjectNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => UserCreateWithoutProjectInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutProjectInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => UserCreateOrConnectWithoutProjectInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => UserUpsertWithoutProjectInputObjectSchema)
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
            z.lazy(() => UserUpdateWithoutProjectInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutProjectInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const UserUpdateOneRequiredWithoutProjectNestedInputObjectSchema =
  Schema;
