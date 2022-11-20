import { getSession } from "next-auth/react";
import { inferAsyncReturnType } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import client from "lib/prisma";

export async function createContext(
  context?: trpcNext.CreateNextContextOptions
) {
  const session = await getSession(context);
  //@ts-ignore
  if (context.res) {
    //@ts-ignore
    context.res.session = session;
  }
  return {
    prisma: client,
    session,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
