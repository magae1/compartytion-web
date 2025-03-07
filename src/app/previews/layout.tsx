import { ReactNode } from "react";

import Header from "@/components/Header";
import HeaderTail from "@/components/HeaderTail";

interface Props {
  children: ReactNode;
}

export default function PreviewsLayout({ children }: Props) {
  return (
    <>
      <Header tail={<HeaderTail />} center />
      {children}
    </>
  );
}
