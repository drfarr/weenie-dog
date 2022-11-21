import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutHotspotInputObjectSchema } from "./UserCreateWithoutHotspotInput.schema";
import { UserUncheckedCreateWithoutHotspotInputObjectSchema } from "./UserUncheckedCreateWithoutHotspotInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutHotspotInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutHotspotInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutHotspotInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutHotspotInputObjectSchema = Schema;
