import { Suspense } from "react";
import Link from "next/link";

import HeaderButtonGroup from "@/components/HeaderButtonGroup";

interface Props {
  display?: "fixed" | "static";
}

export default function Header({ display = "fixed" }: Props) {
  return (
    <div
      className={`${display} z-50 h-14 w-full flex-none border-b border-slate-900/10 backdrop-blur transition-colors duration-500 lg:h-16 dark:border-slate-50/[0.06]`}
    >
      <div className="container mx-auto flex h-full w-full max-w-screen-2xl items-center px-1 lg:px-3">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost no-animation gap-x-0">
            Compartytion
          </Link>
        </div>
        <div className="mr-2 flex-none">
          <Suspense fallback={null}>
            <HeaderButtonGroup />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
