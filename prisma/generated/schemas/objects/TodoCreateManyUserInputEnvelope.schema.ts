import { z } from "zod";
import { TodoCreateManyUserInputObjectSchema } from "./TodoCreateManyUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TodoCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => TodoCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TodoCreateManyUserInputEnvelopeObjectSchema = Schema;
