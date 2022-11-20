import { rule, shield, and, or, not, allow, deny } from "trpc-shield";
import { Context } from "./context";

// Rules

const isAuthenticated = rule()(async (ctx) => {
  return ctx.session !== null;
});

const isQueryBoundToUser = rule()(async (ctx, type, path, rawInput) => {
  // @ts-ignore
  return rawInput?.where?.userId?.equals === ctx.session?.user?.userId;
});

const isMutationBoundToUser = rule()(async (ctx, type, path, rawInput) => {
  // @ts-ignore
  return rawInput?.data?.user?.connect?.id === ctx.session?.user?.userId;
});

// Permissions

const permissions = shield(
  {
    query: {
      listTodos: and(isAuthenticated, isQueryBoundToUser),
    },
    mutation: {
      createTodo: and(isAuthenticated, isMutationBoundToUser),
      updateTodo: deny,
    },
  },
  {
    debug: true,
    fallbackRule: deny,
  }
);

export default permissions;
