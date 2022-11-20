import { z } from "zod";

export const TodoScalarFieldEnumSchema = z.enum([
  "id",
  "content",
  "name",
  "done",
  "userId",
  "updatedAt",
  "createdAt",
]);
