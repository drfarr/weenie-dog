import { z } from "zod";
import { ProjectViewWhereInputObjectSchema } from "./objects/ProjectViewWhereInput.schema";
import { ProjectViewOrderByWithRelationInputObjectSchema } from "./objects/ProjectViewOrderByWithRelationInput.schema";
import { ProjectViewWhereUniqueInputObjectSchema } from "./objects/ProjectViewWhereUniqueInput.schema";
import { ProjectViewScalarFieldEnumSchema } from "./enums/ProjectViewScalarFieldEnum.schema";

export const ProjectViewFindManySchema = z.object({
  where: ProjectViewWhereInputObjectSchema.optional(),
  orderBy: ProjectViewOrderByWithRelationInputObjectSchema.optional(),
  cursor: ProjectViewWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ProjectViewScalarFieldEnumSchema).optional(),
});
