import todos from "./Todo.router";
import projectViews from "./ProjectView.router";
import hotspot from "./Hotspot.router";
import projects from "./Project.router";
import { data, t } from "lib/trpc";
export type AppRouter = typeof appRouter;

const appRouter = t.router({
  todos,
  projects,
  projectViews,
  hotspot,
});

export default appRouter;
