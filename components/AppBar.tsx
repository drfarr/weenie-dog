import { router } from "@trpc/server";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Logo from "./Logo";

export default function AppBar() {
  const { data: session } = useSession();
  const router = useRouter();

  const onLogout = () => {
    signOut({
      callbackUrl: "/",
      redirect: true,
    });
  };
  return (
    <div className="navbar mt-5">
      <div className="navbar-start">
        <div className="bg-base-100 dropdown btn-circle">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={session?.user?.image as string} />
              </div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={onLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a
          onClick={() => router.push("/projects")}
          style={{ textShadow: "#5c08ab 1px 1px 0px" }}
          className="btn btn-ghost normal-case text-2xl logo"
        >
          Weenie Dog
        </a>
        <Logo className="w-20 h-20 fill-neutral-content glow" />
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
