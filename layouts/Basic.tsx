import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";

export default function BasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (data) {
      router.push("/projects");
    }
  }, []);
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center">
      {children}
    </div>
  );
}

export function getLayout(page: ReactElement) {
  return <BasicLayout>{page}</BasicLayout>;
}
