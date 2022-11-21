import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema";
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./AccountUncheckedUpdateManyWithoutUserNestedInput.schema";
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./SessionUncheckedUpdateManyWithoutUserNestedInput.schema";
import { TodoUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./TodoUncheckedUpdateManyWithoutUserNestedInput.schema";
import { HotspotUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./HotspotUncheckedUpdateManyWithoutUserNestedInput.schema";
import { ProjectViewUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./ProjectViewUncheckedUpdateManyWithoutUserNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutProjectInput> = z
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
    accounts: z
      .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    todos: z
      .lazy(() => TodoUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    Hotspot: z
      .lazy(() => HotspotUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    ProjectView: z
      .lazy(
        () => ProjectViewUncheckedUpdateManyWithoutUserNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateWithoutProjectInputObjectSchema = Schema;
