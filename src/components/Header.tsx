import Link from "next/link";
import { cookies } from "next/headers";

import { SESSION_COOKIE_NAME } from "@/libs/constants";
import HeaderButtonGroup from "@/components/HeaderButtonGroup";

interface Props {
  display?: "fixed" | "static";
}

export default async function Header({ display = "fixed" }: Props) {
  const cookieStore = await cookies();

  const isAuthenticated = cookieStore.has(SESSION_COOKIE_NAME);

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
        <div className="flex-none">
          <HeaderButtonGroup isAuthenticated={isAuthenticated} />
        </div>
      </div>
    </div>
  );
}
