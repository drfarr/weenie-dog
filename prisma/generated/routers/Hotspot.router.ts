import { createRouter } from "./helpers/createRouter";
import { HotspotFindUniqueSchema } from "../schemas/findUniqueHotspot.schema";
import { HotspotFindFirstSchema } from "../schemas/findFirstHotspot.schema";
import { HotspotFindManySchema } from "../schemas/findManyHotspot.schema";
import { HotspotCreateOneSchema } from "../schemas/createOneHotspot.schema";
import { HotspotCreateManySchema } from "../schemas/createManyHotspot.schema";
import { HotspotDeleteOneSchema } from "../schemas/deleteOneHotspot.schema";
import { HotspotUpdateOneSchema } from "../schemas/updateOneHotspot.schema";
import { HotspotDeleteManySchema } from "../schemas/deleteManyHotspot.schema";
import { HotspotUpdateManySchema } from "../schemas/updateManyHotspot.schema";
import { HotspotUpsertSchema } from "../schemas/upsertOneHotspot.schema";
import { HotspotAggregateSchema } from "../schemas/aggregateHotspot.schema";
import { HotspotGroupBySchema } from "../schemas/groupByHotspot.schema";

export const hotspotsRouter = createRouter()

  .query("aggregateHotspot", {
    input: HotspotAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateHotspot = await ctx.prisma.hotspot.aggregate(input);
      return aggregateHotspot;
    },
  })

  .mutation("createManyHotspot", {
    input: HotspotCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyHotspot = await ctx.prisma.hotspot.createMany({ data: input.data });
      return createManyHotspot;
    },
  })

  .mutation("createOneHotspot", {
    input: HotspotCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneHotspot = await ctx.prisma.hotspot.create({ data: input.data });
      return createOneHotspot;
    },
  })

  .mutation("deleteManyHotspot", {
    input: HotspotDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyHotspot = await ctx.prisma.hotspot.deleteMany(input);
      return deleteManyHotspot;
    },
  })

  .mutation("deleteOneHotspot", {
    input: HotspotDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneHotspot = await ctx.prisma.hotspot.delete({ where: input.where });
      return deleteOneHotspot;
    },
  })

  .query("findFirstHotspot", {
    input: HotspotFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstHotspot = await ctx.prisma.hotspot.findFirst(input);
      return findFirstHotspot;
    },
  })

  .query("findManyHotspot", {
    input: HotspotFindManySchema,
    async resolve({ ctx, input }) {
      const findManyHotspot = await ctx.prisma.hotspot.findMany(input);
      return findManyHotspot;
    },
  })

  .query("findUniqueHotspot", {
    input: HotspotFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueHotspot = await ctx.prisma.hotspot.findUnique({ where: input.where });
      return findUniqueHotspot;
    },
  })

  .query("groupByHotspot", {
    input: HotspotGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByHotspot = await ctx.prisma.hotspot.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByHotspot;
    },
  })

  .mutation("updateManyHotspot", {
    input: HotspotUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyHotspot = await ctx.prisma.hotspot.updateMany(input);
      return updateManyHotspot;
    },
  })

  .mutation("updateOneHotspot", {
    input: HotspotUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneHotspot = await ctx.prisma.hotspot.update({ where: input.where, data: input.data });
      return updateOneHotspot;
    },
  })

  .mutation("upsertOneHotspot", {
    input: HotspotUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneHotspot = await ctx.prisma.hotspot.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneHotspot;
    },
  })
