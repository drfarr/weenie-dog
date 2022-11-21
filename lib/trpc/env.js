// @ts-check
/**
 * This file is included in `/next.config.mjs` which ensures the app isn't built with invalid env vars.
 * It has to be a `.mjs`-file to be imported there.
 */
const z = require("zod");

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "test", "production"]),
  NEXTAUTH_SECRET: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
});

const parsedEnv = envSchema.safeParse(process.env);

const formatErrors = (
  /** @type {import('zod').ZodFormattedError<Map<string,string>,string>} */
  errors
) =>
  Object.entries(errors)
    .map(([name, value]) => {
      // eslint-disable-next-line no-underscore-dangle
      if (value && "_errors" in value)
        return `${name}: ${value._errors.join(", ")}\n`;
      return undefined;
    })
    .filter(Boolean);

if (!parsedEnv.success) {
  console.error(
    "❌ Invalid environment variables:\n",
    ...formatErrors(parsedEnv.error.format())
  );
  process.exit(1);
}

module.exports.env = parsedEnv.data;
