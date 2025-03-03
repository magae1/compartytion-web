import { ReactNode } from "react";

import Header from "@/components/Header";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <>
      <Header display="static" center={true} />
      <div className="mx-auto max-w-sm pt-6 sm:pt-8 md:pt-12 lg:pt-16">
        {children}
      </div>
    </>
  );
}
