import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutProjectViewInputObjectSchema } from "./UserCreateWithoutProjectViewInput.schema";
import { UserUncheckedCreateWithoutProjectViewInputObjectSchema } from "./UserUncheckedCreateWithoutProjectViewInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutProjectViewInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutProjectViewInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutProjectViewInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutProjectViewInputObjectSchema = Schema;
