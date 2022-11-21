import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutProjectInputObjectSchema } from "./UserCreateWithoutProjectInput.schema";
import { UserUncheckedCreateWithoutProjectInputObjectSchema } from "./UserUncheckedCreateWithoutProjectInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutProjectInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutProjectInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutProjectInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutProjectInputObjectSchema = Schema;
