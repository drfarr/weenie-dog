import { signIn } from "next-auth/react";
import React from "react";
import Sparkle from "react-sparkle";
export default function Login() {
  const onClick = () => {
    signIn("google");
  };
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <a className="btn btn-ghost normal-case text-2xl logo">Weenie Dog</a>
        <div className="card-actions justify-end">
          <div style={{ position: "relative" }}>
            <Sparkle />
            <button onClick={onClick} className="btn btn-primary">
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
