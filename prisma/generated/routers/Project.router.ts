import { createRouter } from "./helpers/createRouter";
import { ProjectFindUniqueSchema } from "../schemas/findUniqueProject.schema";
import { ProjectFindFirstSchema } from "../schemas/findFirstProject.schema";
import { ProjectFindManySchema } from "../schemas/findManyProject.schema";
import { ProjectCreateOneSchema } from "../schemas/createOneProject.schema";
import { ProjectCreateManySchema } from "../schemas/createManyProject.schema";
import { ProjectDeleteOneSchema } from "../schemas/deleteOneProject.schema";
import { ProjectUpdateOneSchema } from "../schemas/updateOneProject.schema";
import { ProjectDeleteManySchema } from "../schemas/deleteManyProject.schema";
import { ProjectUpdateManySchema } from "../schemas/updateManyProject.schema";
import { ProjectUpsertSchema } from "../schemas/upsertOneProject.schema";
import { ProjectAggregateSchema } from "../schemas/aggregateProject.schema";
import { ProjectGroupBySchema } from "../schemas/groupByProject.schema";

export const projectsRouter = createRouter()

  .query("aggregateProject", {
    input: ProjectAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateProject = await ctx.prisma.project.aggregate(input);
      return aggregateProject;
    },
  })

  .mutation("createManyProject", {
    input: ProjectCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyProject = await ctx.prisma.project.createMany({ data: input.data });
      return createManyProject;
    },
  })

  .mutation("createOneProject", {
    input: ProjectCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneProject = await ctx.prisma.project.create({ data: input.data });
      return createOneProject;
    },
  })

  .mutation("deleteManyProject", {
    input: ProjectDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyProject = await ctx.prisma.project.deleteMany(input);
      return deleteManyProject;
    },
  })

  .mutation("deleteOneProject", {
    input: ProjectDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneProject = await ctx.prisma.project.delete({ where: input.where });
      return deleteOneProject;
    },
  })

  .query("findFirstProject", {
    input: ProjectFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstProject = await ctx.prisma.project.findFirst(input);
      return findFirstProject;
    },
  })

  .query("findManyProject", {
    input: ProjectFindManySchema,
    async resolve({ ctx, input }) {
      const findManyProject = await ctx.prisma.project.findMany(input);
      return findManyProject;
    },
  })

  .query("findUniqueProject", {
    input: ProjectFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueProject = await ctx.prisma.project.findUnique({ where: input.where });
      return findUniqueProject;
    },
  })

  .query("groupByProject", {
    input: ProjectGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByProject = await ctx.prisma.project.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByProject;
    },
  })

  .mutation("updateManyProject", {
    input: ProjectUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyProject = await ctx.prisma.project.updateMany(input);
      return updateManyProject;
    },
  })

  .mutation("updateOneProject", {
    input: ProjectUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneProject = await ctx.prisma.project.update({ where: input.where, data: input.data });
      return updateOneProject;
    },
  })

  .mutation("upsertOneProject", {
    input: ProjectUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneProject = await ctx.prisma.project.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneProject;
    },
  })
