import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import client from "lib/prisma";

export default NextAuth({
  adapter: PrismaAdapter(client),

  callbacks: {
    async session({ session, user }) {
      session.user.userId = user.id;
      return session;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  debug: true,
  logger: {
    error(code, metadata) {
      console.error(code, metadata);
    },
    warn(code) {
      // console.warn(code);
    },
    debug(code, metadata) {
      // console.debug(code, metadata);
    },
  },
});
