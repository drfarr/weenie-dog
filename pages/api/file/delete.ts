import { Storage } from "@google-cloud/storage";
import { appRouter } from "prisma/generated/routers";
import { createContext } from "lib/trpc/context";
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
  const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY,
    },
  });
  try {
    const { resourceUrl, id, title } = req.body;

    console.log(resourceUrl);

    const bucket = storage.bucket(process.env.BUCKET_NAME as string);
    await bucket.file(resourceUrl).delete();
    const trpcCtx = await createContext({ req, res });

    await appRouter
      .createCaller(trpcCtx)
      .mutation("projectview.updateOneProjectView", {
        data: {
          resourceUrl: null,
          title,
        },
        where: {
          id,
        },
      });
  } catch (e) {
    console.error(e);
  }

  res.status(200).json({ yey: "lol" });
}
