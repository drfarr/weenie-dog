import { z } from "zod";
import { UserUpdateWithoutProjectInputObjectSchema } from "./UserUpdateWithoutProjectInput.schema";
import { UserUncheckedUpdateWithoutProjectInputObjectSchema } from "./UserUncheckedUpdateWithoutProjectInput.schema";
import { UserCreateWithoutProjectInputObjectSchema } from "./UserCreateWithoutProjectInput.schema";
import { UserUncheckedCreateWithoutProjectInputObjectSchema } from "./UserUncheckedCreateWithoutProjectInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutProjectInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutProjectInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutProjectInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutProjectInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutProjectInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutProjectInputObjectSchema = Schema;
