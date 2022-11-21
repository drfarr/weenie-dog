import { z } from "zod";
import { UserUpdateWithoutHotspotInputObjectSchema } from "./UserUpdateWithoutHotspotInput.schema";
import { UserUncheckedUpdateWithoutHotspotInputObjectSchema } from "./UserUncheckedUpdateWithoutHotspotInput.schema";
import { UserCreateWithoutHotspotInputObjectSchema } from "./UserCreateWithoutHotspotInput.schema";
import { UserUncheckedCreateWithoutHotspotInputObjectSchema } from "./UserUncheckedCreateWithoutHotspotInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutHotspotInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutHotspotInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutHotspotInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutHotspotInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutHotspotInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutHotspotInputObjectSchema = Schema;
