"use client";

import { AppProgressProvider } from "@bprogress/next";
import { Toaster } from "sonner";

import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <AppProgressProvider
          height="3px"
          color="#1414144d"
          options={{ showSpinner: false }}
          shallowRouting
        >
          <Nav />
          <div className="relative flex flex-1 items-stretch justify-center">
            {children}
          </div>
          <Footer />
        </AppProgressProvider>
      </div>
      <Toaster
        position="top-center"
        duration={10000}
        className="font-konstanz text-sm font-medium"
      />
    </>
  );
}
