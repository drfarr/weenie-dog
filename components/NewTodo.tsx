import { trpc } from "lib/trpc/next";
import { useSession } from "next-auth/react";
import { Fragment, useState } from "react";

export default function NewTodo() {
  const [content, setContent] = useState("");
  const utils = trpc.useContext();
  const _addTodo = trpc.todos.createTodo.useMutation({
    onSuccess: () => utils.todos.listTodos.invalidate(),
  });
  const session = useSession();
  const addTodo = () => {
    _addTodo.mutate({
      data: {
        content,
        user: {
          connect: {
            id: session.data?.user.userId,
          },
        },
      },
    });
    setContent("");
  };
  return (
    <Fragment>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="textarea textarea-bordered w-full"
        placeholder="Bio"
      ></textarea>
      <button className="btn" onClick={addTodo}>
        Add
      </button>
    </Fragment>
  );
}
