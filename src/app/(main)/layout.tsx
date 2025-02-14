import { ReactNode } from "react";

import Header from "@/components/Header";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="h-14 lg:h-16"></div>
      {children}
    </>
  );
}
