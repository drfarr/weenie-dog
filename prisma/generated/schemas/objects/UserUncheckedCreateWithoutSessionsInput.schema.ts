import { z } from "zod";
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./AccountUncheckedCreateNestedManyWithoutUserInput.schema";
import { TodoUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./TodoUncheckedCreateNestedManyWithoutUserInput.schema";
import { HotspotUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./HotspotUncheckedCreateNestedManyWithoutUserInput.schema";
import { ProjectViewUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./ProjectViewUncheckedCreateNestedManyWithoutUserInput.schema";
import { ProjectUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./ProjectUncheckedCreateNestedManyWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    todos: z
      .lazy(() => TodoUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Hotspot: z
      .lazy(() => HotspotUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    ProjectView: z
      .lazy(
        () => ProjectViewUncheckedCreateNestedManyWithoutUserInputObjectSchema
      )
      .optional(),
    Project: z
      .lazy(() => ProjectUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutSessionsInputObjectSchema = Schema;
