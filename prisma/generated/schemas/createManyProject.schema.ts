import { z } from "zod";
import { ProjectCreateManyInputObjectSchema } from "./objects/ProjectCreateManyInput.schema";

export const ProjectCreateManySchema = z.object({
  data: ProjectCreateManyInputObjectSchema,
});
