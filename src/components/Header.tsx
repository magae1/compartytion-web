import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  display?: "fixed" | "static" | "sticky";
  head?: ReactNode;
  tail?: ReactNode;
  center?: boolean;
}

export default function Header({
  display = "fixed",
  head = <HeadLink />,
  tail,
  center = false,
}: Props) {
  return (
    <div
      className={`${display} header-size z-10 w-full flex-none border-b border-slate-900/10 bg-base-100 backdrop-blur-sm transition-colors duration-500 dark:border-slate-50/[0.06]`}
    >
      <div
        className={`${center ? "container mx-auto max-w-(--breakpoint-2xl)" : ""} flex h-full w-full items-center px-2 lg:px-3`}
      >
        <div className="flex flex-1 items-center gap-x-2">{head}</div>
        <div className="flex flex-none items-center gap-x-2">{tail}</div>
      </div>
    </div>
  );
}

function HeadLink() {
  return (
    <Link href="/" className="btn btn-ghost no-animation gap-x-0">
      Compartytion
    </Link>
  );
}
