import { z } from "zod";
import { UserCreateWithoutProjectInputObjectSchema } from "./UserCreateWithoutProjectInput.schema";
import { UserUncheckedCreateWithoutProjectInputObjectSchema } from "./UserUncheckedCreateWithoutProjectInput.schema";
import { UserCreateOrConnectWithoutProjectInputObjectSchema } from "./UserCreateOrConnectWithoutProjectInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutProjectInput> =
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
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const UserCreateNestedOneWithoutProjectInputObjectSchema = Schema;
