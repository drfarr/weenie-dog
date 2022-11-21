import { Storage } from "@google-cloud/storage";

import { createContext } from "lib/trpc/context";

import { getSession } from "next-auth/react";

import { appRouter } from "prisma/generated/routers";
import { getHTTPStatusCodeFromError } from "@trpc/server/http";
import path from "path";
import { TRPCError } from "@trpc/server";

import multer, { memoryStorage } from "multer";

const upload = multer({ storage: memoryStorage() });

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: any, res: any) {
  await runMiddleware(req, res, upload.single("file"));
  const trpcCtx = await createContext({ req, res });
  const session = await getSession({ req });

  try {
    const storage = new Storage({
      projectId: process.env.PROJECT_ID,
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY,
      },
    });

    const file = req.file;
    const { id, order, title } = req.body;

    const bucket = storage.bucket(process.env.BUCKET_NAME as string);

    const ext = path.extname(file.originalname);
    const fileName = `${id}-${new Date().getTime() / 1000}${ext}`;

    const gcpFile = await bucket.file(fileName);

    await gcpFile.save(req.file.buffer, {
      resumable: true,
      public: true,
    });
    const resourceUrl = `https://storage.googleapis.com/${process.env.BUCKET_NAME}/${fileName}`;

    await appRouter
      .createCaller(trpcCtx)
      .mutation("projectview.updateOneProjectView", {
        data: {
          resourceUrl,
          title,
          user: {
            connect: { id: session?.user?.userId },
          },
        },
        where: {
          id,
        },
      });
  } catch (error) {
    if (error instanceof TRPCError) {
      // We can get the specific HTTP status code coming from tRPC (e.g. 404 for `NOT_FOUND`).
      const httpStatusCode = getHTTPStatusCodeFromError(error);
      res.status(httpStatusCode).json({ error: { message: error.message } });
      return;
    }
    // This is not a tRPC error, so we don't have specific information.
    return res.status(500).json({
      error: { message: error },
    });
  }

  res.status(200).json({});
}
