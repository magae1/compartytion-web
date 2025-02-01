import { ReactNode } from "react";
import Header from "@/components/Header";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <>
      <Header display="static" />
      <div className="container mx-auto max-w-screen-sm pt-6 sm:pt-8 md:pt-12 lg:pt-16">
        {children}
      </div>
    </>
  );
}
