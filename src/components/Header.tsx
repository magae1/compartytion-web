import { ReactNode } from "react";

interface Props {
  display?: "fixed" | "static" | "sticky";
  head?: ReactNode;
  tail?: ReactNode;
  center?: boolean;
}

export default function Header({
  display = "fixed",
  head,
  tail,
  center = false,
}: Props) {
  return (
    <div
      className={`${display} z-10 h-14 w-full flex-none border-b border-slate-900/10 bg-base-100 backdrop-blur transition-colors duration-500 lg:h-16 dark:border-slate-50/[0.06]`}
    >
      <div
        className={`${center ? "container mx-auto max-w-screen-2xl" : ""} flex h-full w-full items-center px-2 lg:px-3`}
      >
        <div className="flex flex-1 items-center gap-x-2">{head}</div>
        <div className="flex flex-none items-center gap-x-2">{tail}</div>
      </div>
    </div>
  );
}
