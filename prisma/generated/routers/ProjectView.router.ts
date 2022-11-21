import { createRouter } from "./helpers/createRouter";
import { ProjectViewFindUniqueSchema } from "../schemas/findUniqueProjectView.schema";
import { ProjectViewFindFirstSchema } from "../schemas/findFirstProjectView.schema";
import { ProjectViewFindManySchema } from "../schemas/findManyProjectView.schema";
import { ProjectViewCreateOneSchema } from "../schemas/createOneProjectView.schema";
import { ProjectViewCreateManySchema } from "../schemas/createManyProjectView.schema";
import { ProjectViewDeleteOneSchema } from "../schemas/deleteOneProjectView.schema";
import { ProjectViewUpdateOneSchema } from "../schemas/updateOneProjectView.schema";
import { ProjectViewDeleteManySchema } from "../schemas/deleteManyProjectView.schema";
import { ProjectViewUpdateManySchema } from "../schemas/updateManyProjectView.schema";
import { ProjectViewUpsertSchema } from "../schemas/upsertOneProjectView.schema";
import { ProjectViewAggregateSchema } from "../schemas/aggregateProjectView.schema";
import { ProjectViewGroupBySchema } from "../schemas/groupByProjectView.schema";

export const projectviewsRouter = createRouter()

  .query("aggregateProjectView", {
    input: ProjectViewAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateProjectView = await ctx.prisma.projectView.aggregate(input);
      return aggregateProjectView;
    },
  })

  .mutation("createManyProjectView", {
    input: ProjectViewCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyProjectView = await ctx.prisma.projectView.createMany({ data: input.data });
      return createManyProjectView;
    },
  })

  .mutation("createOneProjectView", {
    input: ProjectViewCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneProjectView = await ctx.prisma.projectView.create({ data: input.data });
      return createOneProjectView;
    },
  })

  .mutation("deleteManyProjectView", {
    input: ProjectViewDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyProjectView = await ctx.prisma.projectView.deleteMany(input);
      return deleteManyProjectView;
    },
  })

  .mutation("deleteOneProjectView", {
    input: ProjectViewDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneProjectView = await ctx.prisma.projectView.delete({ where: input.where });
      return deleteOneProjectView;
    },
  })

  .query("findFirstProjectView", {
    input: ProjectViewFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstProjectView = await ctx.prisma.projectView.findFirst(input);
      return findFirstProjectView;
    },
  })

  .query("findManyProjectView", {
    input: ProjectViewFindManySchema,
    async resolve({ ctx, input }) {
      const findManyProjectView = await ctx.prisma.projectView.findMany(input);
      return findManyProjectView;
    },
  })

  .query("findUniqueProjectView", {
    input: ProjectViewFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueProjectView = await ctx.prisma.projectView.findUnique({ where: input.where });
      return findUniqueProjectView;
    },
  })

  .query("groupByProjectView", {
    input: ProjectViewGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByProjectView = await ctx.prisma.projectView.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByProjectView;
    },
  })

  .mutation("updateManyProjectView", {
    input: ProjectViewUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyProjectView = await ctx.prisma.projectView.updateMany(input);
      return updateManyProjectView;
    },
  })

  .mutation("updateOneProjectView", {
    input: ProjectViewUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneProjectView = await ctx.prisma.projectView.update({ where: input.where, data: input.data });
      return updateOneProjectView;
    },
  })

  .mutation("upsertOneProjectView", {
    input: ProjectViewUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneProjectView = await ctx.prisma.projectView.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneProjectView;
    },
  })
