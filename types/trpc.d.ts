import { inferProcedureInput, inferProcedureOutput } from "@trpc/server";
import { AppRouter } from "lib/trpc/router";

export type TodoListInput = inferProcedureInput<
  AppRouter["todos"]["listTodos"]
>;
export type TodoListOutput = inferProcedureOutput<
  AppRouter["todos"]["listTodos"]
>;

export type ProjectViewListInput = inferProcedureInput<
  AppRouter["projectViews"]["list"]
>;

export type ProjectViewListOutput = inferProcedureInput<
  AppRouter["projectViews"]["list"]
>;
export type ProjectOutput = inferProcedureInput<AppRouter["project"]["read"]>;
export type ProjectInput = inferProcedureInput<AppRouter["project"]["read"]>;

export type ProjectListInput = inferProcedureInput<
  AppRouter["project"]["list"]
>;

export type ProjectListOutput = inferProcedureInput<
  AppRouter["project"]["list"]
>;

export type HotspotListInput = inferProcedureInput<
  AppRouter["hotspot"]["list"]
>;

export type HotspotListOutput = inferProcedureInput<
  AppRouter["hotspot"]["list"]
>;
