import { z } from "zod";
import { UserCreateWithoutHotspotInputObjectSchema } from "./UserCreateWithoutHotspotInput.schema";
import { UserUncheckedCreateWithoutHotspotInputObjectSchema } from "./UserUncheckedCreateWithoutHotspotInput.schema";
import { UserCreateOrConnectWithoutHotspotInputObjectSchema } from "./UserCreateOrConnectWithoutHotspotInput.schema";
import { UserUpsertWithoutHotspotInputObjectSchema } from "./UserUpsertWithoutHotspotInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutHotspotInputObjectSchema } from "./UserUpdateWithoutHotspotInput.schema";
import { UserUncheckedUpdateWithoutHotspotInputObjectSchema } from "./UserUncheckedUpdateWithoutHotspotInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutHotspotNestedInput> =
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
        upsert: z
          .lazy(() => UserUpsertWithoutHotspotInputObjectSchema)
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
            z.lazy(() => UserUpdateWithoutHotspotInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutHotspotInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const UserUpdateOneRequiredWithoutHotspotNestedInputObjectSchema =
  Schema;
