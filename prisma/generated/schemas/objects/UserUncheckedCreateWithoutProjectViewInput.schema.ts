import { z } from "zod";
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./AccountUncheckedCreateNestedManyWithoutUserInput.schema";
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInput.schema";
import { TodoUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./TodoUncheckedCreateNestedManyWithoutUserInput.schema";
import { HotspotUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./HotspotUncheckedCreateNestedManyWithoutUserInput.schema";
import { ProjectUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./ProjectUncheckedCreateNestedManyWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutProjectViewInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    todos: z
      .lazy(() => TodoUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Hotspot: z
      .lazy(() => HotspotUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Project: z
      .lazy(() => ProjectUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutProjectViewInputObjectSchema = Schema;
