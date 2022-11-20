import { z } from "zod";
import { TodoCreateWithoutUserInputObjectSchema } from "./TodoCreateWithoutUserInput.schema";
import { TodoUncheckedCreateWithoutUserInputObjectSchema } from "./TodoUncheckedCreateWithoutUserInput.schema";
import { TodoCreateOrConnectWithoutUserInputObjectSchema } from "./TodoCreateOrConnectWithoutUserInput.schema";
import { TodoUpsertWithWhereUniqueWithoutUserInputObjectSchema } from "./TodoUpsertWithWhereUniqueWithoutUserInput.schema";
import { TodoCreateManyUserInputEnvelopeObjectSchema } from "./TodoCreateManyUserInputEnvelope.schema";
import { TodoWhereUniqueInputObjectSchema } from "./TodoWhereUniqueInput.schema";
import { TodoUpdateWithWhereUniqueWithoutUserInputObjectSchema } from "./TodoUpdateWithWhereUniqueWithoutUserInput.schema";
import { TodoUpdateManyWithWhereWithoutUserInputObjectSchema } from "./TodoUpdateManyWithWhereWithoutUserInput.schema";
import { TodoScalarWhereInputObjectSchema } from "./TodoScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TodoUpdateManyWithoutUserNestedInput> = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => TodoCreateWithoutUserInputObjectSchema),
          z.lazy(() => TodoCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => TodoUncheckedCreateWithoutUserInputObjectSchema),
          z.lazy(() => TodoUncheckedCreateWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .union([
          z.lazy(() => TodoCreateOrConnectWithoutUserInputObjectSchema),
          z.lazy(() => TodoCreateOrConnectWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      upsert: z
        .union([
          z.lazy(() => TodoUpsertWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => TodoUpsertWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      createMany: z
        .lazy(() => TodoCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      set: z
        .union([
          z.lazy(() => TodoWhereUniqueInputObjectSchema),
          z.lazy(() => TodoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      disconnect: z
        .union([
          z.lazy(() => TodoWhereUniqueInputObjectSchema),
          z.lazy(() => TodoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      delete: z
        .union([
          z.lazy(() => TodoWhereUniqueInputObjectSchema),
          z.lazy(() => TodoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connect: z
        .union([
          z.lazy(() => TodoWhereUniqueInputObjectSchema),
          z.lazy(() => TodoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      update: z
        .union([
          z.lazy(() => TodoUpdateWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => TodoUpdateWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      updateMany: z
        .union([
          z.lazy(() => TodoUpdateManyWithWhereWithoutUserInputObjectSchema),
          z
            .lazy(() => TodoUpdateManyWithWhereWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      deleteMany: z
        .union([
          z.lazy(() => TodoScalarWhereInputObjectSchema),
          z.lazy(() => TodoScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
]);

export const TodoUpdateManyWithoutUserNestedInputObjectSchema = Schema;
