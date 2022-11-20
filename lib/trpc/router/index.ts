import { data, t } from "lib/trpc";
import { TodoCreateOneSchema } from "prisma/generated/schemas/createOneTodo.schema";
import { TodoFindManySchema } from "prisma/generated/schemas/findManyTodo.schema";
import { TodoUpdateOneSchema } from "prisma/generated/schemas/updateOneTodo.schema";
import { z } from "zod";

export type AppRouter = typeof appRouter;

const appRouter = t.router({
  todos: t.router({
    createTodo: data.input(TodoCreateOneSchema).mutation(({ input, ctx }) => {
      return ctx.prisma.todo.create(input);
    }),
    updateTodo: data.input(TodoUpdateOneSchema).mutation(({ input, ctx }) => {
      return ctx.prisma.todo.update(input);
    }),
    listTodos: data.input(TodoFindManySchema).query(({ input, ctx }) => {
      return ctx.prisma.todo.findMany(input);
    }),
  }),
});

export default appRouter;
