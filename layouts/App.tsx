import AppBar from "components/AppBar";

import { Fragment, ReactElement } from "react";

import Footer from "components/Footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto min-h-full flex flex-col h-screen justify-between">
      <AppBar />

      <div className="pt-4 flex flex-row mb-auto h-10">{children}</div>
      <Footer />
    </div>
  );
}

export function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
}
