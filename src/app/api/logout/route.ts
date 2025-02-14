import { cookies } from "next/headers";

import { baseFetcher } from "@/libs/fetchers";
import { SESSION_COOKIE_NAME } from "@/libs/constants";

export async function POST() {
  const cookieStore = await cookies();

  await baseFetcher("/auth/logout", {
    sessionId: cookieStore.get(SESSION_COOKIE_NAME)?.value,
  });
  cookieStore.delete(SESSION_COOKIE_NAME);

  return new Response(null, {
    status: 200,
    headers: { "Set-Cookie": cookieStore.toString() },
  });
}
