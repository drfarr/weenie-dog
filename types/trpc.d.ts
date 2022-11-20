import { inferProcedureInput, inferProcedureOutput } from "@trpc/server";
import { AppRouter } from "lib/trpc/router";

export type TodoListInput = inferProcedureInput<
  AppRouter["todos"]["listTodos"]
>;
export type TodoListOutput = inferProcedureOutput<
  AppRouter["todos"]["listTodos"]
>;
