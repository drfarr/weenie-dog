import { initTRPC } from "@trpc/server";
import { Context } from "./context";
import permissions from "./permission";
// export API handler

export const t = initTRPC.context<Context>().create();

// @ts-ignore
const isAdmin = t.middleware(permissions);

export const data = t.procedure.use(isAdmin);
