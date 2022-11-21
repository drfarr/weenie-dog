import { z } from "zod";
import { ProjectViewCreateInputObjectSchema } from "./objects/ProjectViewCreateInput.schema";

export const ProjectViewCreateOneSchema = z.object({
  data: ProjectViewCreateInputObjectSchema,
});
