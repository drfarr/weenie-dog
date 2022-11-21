import { z } from "zod";
import { ProjectViewWhereUniqueInputObjectSchema } from "./objects/ProjectViewWhereUniqueInput.schema";

export const ProjectViewFindUniqueSchema = z.object({
  where: ProjectViewWhereUniqueInputObjectSchema,
});
