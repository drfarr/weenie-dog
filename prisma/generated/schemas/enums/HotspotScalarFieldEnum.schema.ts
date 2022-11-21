import { z } from "zod";

export const HotspotScalarFieldEnumSchema = z.enum([
  "id",
  "userId",
  "colour",
  "description",
  "x",
  "y",
  "title",
  "updatedAt",
  "createdAt",
  "projectViewId",
]);
