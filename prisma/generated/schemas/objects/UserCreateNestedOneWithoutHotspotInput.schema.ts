import { z } from "zod";
import { UserCreateWithoutHotspotInputObjectSchema } from "./UserCreateWithoutHotspotInput.schema";
import { UserUncheckedCreateWithoutHotspotInputObjectSchema } from "./UserUncheckedCreateWithoutHotspotInput.schema";
import { UserCreateOrConnectWithoutHotspotInputObjectSchema } from "./UserCreateOrConnectWithoutHotspotInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutHotspotInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => UserCreateWithoutHotspotInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutHotspotInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => UserCreateOrConnectWithoutHotspotInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const UserCreateNestedOneWithoutHotspotInputObjectSchema = Schema;
