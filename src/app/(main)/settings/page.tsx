import { cookies } from "next/headers";

import { baseFetcher } from "@/libs/fetchers";
import { SESSION_COOKIE_NAME } from "@/libs/constants";
import { DetailAccount } from "@/app/(main)/settings/_libs/type";

export default async function SettingsPage() {
  const cookieStore = await cookies();
  const res = await baseFetcher("/accounts/detail/me", {
    sessionId: cookieStore.get(SESSION_COOKIE_NAME)?.value,
  });

  if (!res.ok) throw new Error("잘못된 접근입니다.");

  const data = (await res.json()) as DetailAccount;
  console.log(data);
  return <span>settings</span>;
}
