import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="header-size" />
      <div className="mx-auto max-w-(--breakpoint-md)">{children}</div>
    </>
  );
}
