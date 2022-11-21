import { z } from "zod";
import { UserCreateWithoutProjectViewInputObjectSchema } from "./UserCreateWithoutProjectViewInput.schema";
import { UserUncheckedCreateWithoutProjectViewInputObjectSchema } from "./UserUncheckedCreateWithoutProjectViewInput.schema";
import { UserCreateOrConnectWithoutProjectViewInputObjectSchema } from "./UserCreateOrConnectWithoutProjectViewInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutProjectViewInput> =
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
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const UserCreateNestedOneWithoutProjectViewInputObjectSchema = Schema;
