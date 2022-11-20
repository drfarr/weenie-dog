import { z } from "zod";
import { UserCreateWithoutTodosInputObjectSchema } from "./UserCreateWithoutTodosInput.schema";
import { UserUncheckedCreateWithoutTodosInputObjectSchema } from "./UserUncheckedCreateWithoutTodosInput.schema";
import { UserCreateOrConnectWithoutTodosInputObjectSchema } from "./UserCreateOrConnectWithoutTodosInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutTodosInput> = z.union([
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
]);

export const UserCreateNestedOneWithoutTodosInputObjectSchema = Schema;
