import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema";
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from "./SessionUpdateManyWithoutUserNestedInput.schema";
import { TodoUpdateManyWithoutUserNestedInputObjectSchema } from "./TodoUpdateManyWithoutUserNestedInput.schema";
import { HotspotUpdateManyWithoutUserNestedInputObjectSchema } from "./HotspotUpdateManyWithoutUserNestedInput.schema";
import { ProjectViewUpdateManyWithoutUserNestedInputObjectSchema } from "./ProjectViewUpdateManyWithoutUserNestedInput.schema";
import { ProjectUpdateManyWithoutUserNestedInputObjectSchema } from "./ProjectUpdateManyWithoutUserNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    emailVerified: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    sessions: z
      .lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    todos: z
      .lazy(() => TodoUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    Hotspot: z
      .lazy(() => HotspotUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    ProjectView: z
      .lazy(() => ProjectViewUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    Project: z
      .lazy(() => ProjectUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUpdateWithoutAccountsInputObjectSchema = Schema;
