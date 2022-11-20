import useTodos from "lib/hooks/useTodos";
import useUpdateTodo from "lib/hooks/useUpdateTodo";
import { TodoListOutput } from "types/trpc";

const Todo = ({ todo }: { todo: TodoListOutput[number] }) => {
  const update = useUpdateTodo();
  return (
    <li className="py-2">
      <div className="form-control">
        <label className="label cursor-pointer justify-start">
          <input
            type="checkbox"
            checked={todo.done}
            onChange={(e) => {
              update.mutate({
                where: {
                  id: todo.id,
                },
                data: {
                  done: e.target.checked,
                },
              });
            }}
            className="checkbox checkbox-sm"
          />
          <span className="label-text ml-4">
            {todo.content} {todo.done ? "done" : "not"}
          </span>
        </label>
      </div>
    </li>
  );
};

export default function Todos() {
  const todos = useTodos();
  if (todos.isLoading) {
    return <div>Loading</div>;
  }
  return (
    <ul>
      {todos.data?.length === 0 && <li>No todos</li>}
      {todos.data?.map((todo: any) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
