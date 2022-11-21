import { data, t } from "lib/trpc";
import { HotspotCreateOneSchema } from "prisma/generated/schemas/createOneHotspot.schema";
import { HotspotFindManySchema } from "prisma/generated/schemas/findManyHotspot.schema";
import { HotspotUpdateOneSchema } from "prisma/generated/schemas/updateOneHotspot.schema";

export default t.router({
  create: data.input(HotspotCreateOneSchema).mutation(({ input, ctx }) => {
    return ctx.prisma.hotspot.create(input);
  }),
  update: data.input(HotspotUpdateOneSchema).mutation(({ input, ctx }) => {
    return ctx.prisma.hotspot.update(input);
  }),
  list: data.input(HotspotFindManySchema).query(({ input, ctx }) => {
    return ctx.prisma.hotspot.findMany(input);
  }),
});
