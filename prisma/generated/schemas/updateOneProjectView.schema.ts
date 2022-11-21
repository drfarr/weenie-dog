import { z } from "zod";
import { ProjectViewUpdateInputObjectSchema } from "./objects/ProjectViewUpdateInput.schema";
import { ProjectViewWhereUniqueInputObjectSchema } from "./objects/ProjectViewWhereUniqueInput.schema";

export const ProjectViewUpdateOneSchema = z.object({
  data: ProjectViewUpdateInputObjectSchema,
  where: ProjectViewWhereUniqueInputObjectSchema,
});
