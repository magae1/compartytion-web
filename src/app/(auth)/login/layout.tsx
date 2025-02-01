import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function LoginLayout({ children }: Props) {
  return (
    <div className="container mx-auto flex h-full max-w-80 flex-col items-center justify-center p-4 lg:max-w-screen-sm lg:flex-row">
      <div className="w-full max-w-80">{children}</div>
    </div>
  );
}
