import { createRouter } from "./helpers/createRouter";
import { TodoFindUniqueSchema } from "../schemas/findUniqueTodo.schema";
import { TodoFindFirstSchema } from "../schemas/findFirstTodo.schema";
import { TodoFindManySchema } from "../schemas/findManyTodo.schema";
import { TodoCreateOneSchema } from "../schemas/createOneTodo.schema";
import { TodoCreateManySchema } from "../schemas/createManyTodo.schema";
import { TodoDeleteOneSchema } from "../schemas/deleteOneTodo.schema";
import { TodoUpdateOneSchema } from "../schemas/updateOneTodo.schema";
import { TodoDeleteManySchema } from "../schemas/deleteManyTodo.schema";
import { TodoUpdateManySchema } from "../schemas/updateManyTodo.schema";
import { TodoUpsertSchema } from "../schemas/upsertOneTodo.schema";
import { TodoAggregateSchema } from "../schemas/aggregateTodo.schema";
import { TodoGroupBySchema } from "../schemas/groupByTodo.schema";

export const todosRouter = createRouter()

  .query("aggregateTodo", {
    input: TodoAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateTodo = await ctx.prisma.todo.aggregate(input);
      return aggregateTodo;
    },
  })

  .mutation("createManyTodo", {
    input: TodoCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyTodo = await ctx.prisma.todo.createMany({ data: input.data });
      return createManyTodo;
    },
  })

  .mutation("createOneTodo", {
    input: TodoCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneTodo = await ctx.prisma.todo.create({ data: input.data });
      return createOneTodo;
    },
  })

  .mutation("deleteManyTodo", {
    input: TodoDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyTodo = await ctx.prisma.todo.deleteMany(input);
      return deleteManyTodo;
    },
  })

  .mutation("deleteOneTodo", {
    input: TodoDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneTodo = await ctx.prisma.todo.delete({ where: input.where });
      return deleteOneTodo;
    },
  })

  .query("findFirstTodo", {
    input: TodoFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstTodo = await ctx.prisma.todo.findFirst(input);
      return findFirstTodo;
    },
  })

  .query("findManyTodo", {
    input: TodoFindManySchema,
    async resolve({ ctx, input }) {
      const findManyTodo = await ctx.prisma.todo.findMany(input);
      return findManyTodo;
    },
  })

  .query("findUniqueTodo", {
    input: TodoFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueTodo = await ctx.prisma.todo.findUnique({ where: input.where });
      return findUniqueTodo;
    },
  })

  .query("groupByTodo", {
    input: TodoGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByTodo = await ctx.prisma.todo.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTodo;
    },
  })

  .mutation("updateManyTodo", {
    input: TodoUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyTodo = await ctx.prisma.todo.updateMany(input);
      return updateManyTodo;
    },
  })

  .mutation("updateOneTodo", {
    input: TodoUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneTodo = await ctx.prisma.todo.update({ where: input.where, data: input.data });
      return updateOneTodo;
    },
  })

  .mutation("upsertOneTodo", {
    input: TodoUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneTodo = await ctx.prisma.todo.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneTodo;
    },
  })
