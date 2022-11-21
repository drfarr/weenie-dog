import { z } from "zod";

export const ProjectScalarFieldEnumSchema = z.enum([
  "id",
  "description",
  "title",
  "userId",
  "updatedAt",
  "createdAt",
]);
