import { z } from "zod";
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from "./SessionCreateNestedManyWithoutUserInput.schema";
import { TodoCreateNestedManyWithoutUserInputObjectSchema } from "./TodoCreateNestedManyWithoutUserInput.schema";
import { HotspotCreateNestedManyWithoutUserInputObjectSchema } from "./HotspotCreateNestedManyWithoutUserInput.schema";
import { ProjectViewCreateNestedManyWithoutUserInputObjectSchema } from "./ProjectViewCreateNestedManyWithoutUserInput.schema";
import { ProjectCreateNestedManyWithoutUserInputObjectSchema } from "./ProjectCreateNestedManyWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    todos: z
      .lazy(() => TodoCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Hotspot: z
      .lazy(() => HotspotCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    ProjectView: z
      .lazy(() => ProjectViewCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Project: z
      .lazy(() => ProjectCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutAccountsInputObjectSchema = Schema;
