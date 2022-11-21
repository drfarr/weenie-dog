import { z } from "zod";
import { UserUpdateWithoutProjectViewInputObjectSchema } from "./UserUpdateWithoutProjectViewInput.schema";
import { UserUncheckedUpdateWithoutProjectViewInputObjectSchema } from "./UserUncheckedUpdateWithoutProjectViewInput.schema";
import { UserCreateWithoutProjectViewInputObjectSchema } from "./UserCreateWithoutProjectViewInput.schema";
import { UserUncheckedCreateWithoutProjectViewInputObjectSchema } from "./UserUncheckedCreateWithoutProjectViewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutProjectViewInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutProjectViewInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutProjectViewInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutProjectViewInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutProjectViewInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutProjectViewInputObjectSchema = Schema;
