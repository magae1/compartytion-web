import Link from "next/link";
import { cookies } from "next/headers";

import { MdOutlineSettings, MdOutlineSpaceDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

import { SimpleAccount } from "@/libs/type";
import { baseFetcher } from "@/libs/fetchers";
import { SESSION_COOKIE_NAME } from "@/libs/constants";
import ProfileAvatar from "@/components/ProfileAvatar";
import LogoutButton from "@/components/LogoutButton";

export default async function HeaderButtonGroup() {
  const cookieStore = await cookies();

  if (!cookieStore.has(SESSION_COOKIE_NAME)) {
    return <LoginButton />;
  }

  const res = await baseFetcher("/accounts/simple/me", {
    sessionId: cookieStore.get(SESSION_COOKIE_NAME)?.value,
    next: {
      tags: ["accounts", "simple"],
    },
  });
  if (!res.ok) {
    return <LoginButton />;
  }

  const accountData = (await res.json()) as SimpleAccount | undefined;

  if (!accountData) {
    return <LoginButton />;
  }

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-circle btn-ghost btn-sm h-9 w-9 border-0"
      >
        <ProfileAvatar
          username={accountData.username}
          avatar={accountData.avatar}
        />
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 font-bold shadow"
      >
        <li>
          <Link href={"/dashboard"}>
            <MdOutlineSpaceDashboard size={18} />
            대시보드
          </Link>
        </li>
        <li>
          <Link href={"/settings"}>
            <MdOutlineSettings size={18} />
            설정
          </Link>
        </li>
        <li>
          <LogoutButton icon={<IoMdLogOut size={18} />} />
        </li>
      </ul>
    </div>
  );
}

function LoginButton() {
  return (
    <Link href="/login" className="btn btn-accent btn-sm">
      로그인
    </Link>
  );
}
