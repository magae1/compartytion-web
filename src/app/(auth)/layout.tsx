import { ReactNode } from "react";

import AuthHeader from "@/app/(auth)/_components/AuthHeader";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <>
      <AuthHeader />
      <div className="container mx-auto max-w-screen-sm pt-6 sm:pt-8 md:pt-12 lg:pt-16">
        {children}
      </div>
    </>
  );
}
