import { z } from "zod";
import { ProjectViewWhereInputObjectSchema } from "./objects/ProjectViewWhereInput.schema";
import { ProjectViewOrderByWithAggregationInputObjectSchema } from "./objects/ProjectViewOrderByWithAggregationInput.schema";
import { ProjectViewScalarWhereWithAggregatesInputObjectSchema } from "./objects/ProjectViewScalarWhereWithAggregatesInput.schema";
import { ProjectViewScalarFieldEnumSchema } from "./enums/ProjectViewScalarFieldEnum.schema";

export const ProjectViewGroupBySchema = z.object({
  where: ProjectViewWhereInputObjectSchema.optional(),
  orderBy: ProjectViewOrderByWithAggregationInputObjectSchema,
  having: ProjectViewScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ProjectViewScalarFieldEnumSchema),
});
