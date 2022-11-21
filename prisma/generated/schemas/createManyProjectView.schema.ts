import { z } from "zod";
import { ProjectViewCreateManyInputObjectSchema } from "./objects/ProjectViewCreateManyInput.schema";

export const ProjectViewCreateManySchema = z.object({
  data: ProjectViewCreateManyInputObjectSchema,
});
