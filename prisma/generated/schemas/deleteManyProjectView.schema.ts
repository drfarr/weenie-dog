import { z } from "zod";
import { ProjectViewWhereInputObjectSchema } from "./objects/ProjectViewWhereInput.schema";

export const ProjectViewDeleteManySchema = z.object({
  where: ProjectViewWhereInputObjectSchema.optional(),
});
