import * as trpcNext from "@trpc/server/adapters/next";
import appRouter from "lib/trpc/router";
import { createContext } from "lib/trpc/context";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});
