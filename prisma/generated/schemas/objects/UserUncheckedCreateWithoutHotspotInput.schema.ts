import { z } from "zod";
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./AccountUncheckedCreateNestedManyWithoutUserInput.schema";
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInput.schema";
import { TodoUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./TodoUncheckedCreateNestedManyWithoutUserInput.schema";
import { ProjectViewUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./ProjectViewUncheckedCreateNestedManyWithoutUserInput.schema";
import { ProjectUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./ProjectUncheckedCreateNestedManyWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutHotspotInput> = z
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

export const UserUncheckedCreateWithoutHotspotInputObjectSchema = Schema;
