import { z } from "zod";

export const ProjectViewScalarFieldEnumSchema = z.enum([
  "id",
  "title",
  "description",
  "resourceUrl",
  "userId",
  "order",
  "updatedAt",
  "createdAt",
  "projectId",
]);
