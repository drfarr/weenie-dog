import { z } from "zod";
import { ProjectViewWhereUniqueInputObjectSchema } from "./objects/ProjectViewWhereUniqueInput.schema";

export const ProjectViewDeleteOneSchema = z.object({
  where: ProjectViewWhereUniqueInputObjectSchema,
});
