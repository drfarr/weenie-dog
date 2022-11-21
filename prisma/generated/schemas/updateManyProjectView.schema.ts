import { z } from "zod";
import { ProjectViewUpdateManyMutationInputObjectSchema } from "./objects/ProjectViewUpdateManyMutationInput.schema";
import { ProjectViewWhereInputObjectSchema } from "./objects/ProjectViewWhereInput.schema";

export const ProjectViewUpdateManySchema = z.object({
  data: ProjectViewUpdateManyMutationInputObjectSchema,
  where: ProjectViewWhereInputObjectSchema.optional(),
});
