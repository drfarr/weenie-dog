import { z } from "zod";
import { ProjectViewWhereUniqueInputObjectSchema } from "./objects/ProjectViewWhereUniqueInput.schema";
import { ProjectViewCreateInputObjectSchema } from "./objects/ProjectViewCreateInput.schema";
import { ProjectViewUpdateInputObjectSchema } from "./objects/ProjectViewUpdateInput.schema";

export const ProjectViewUpsertSchema = z.object({
  where: ProjectViewWhereUniqueInputObjectSchema,
  create: ProjectViewCreateInputObjectSchema,
  update: ProjectViewUpdateInputObjectSchema,
});
