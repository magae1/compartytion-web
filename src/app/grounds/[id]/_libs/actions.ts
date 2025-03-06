"use server";

import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { SESSION_COOKIE_NAME } from "@/libs/constants";
import { baseFetcher } from "@/libs/fetchers";
import { CompetitionPermissions } from "@/app/grounds/[id]/_libs/type";

export async function checkPermission(
  competitionId: string,
): Promise<CompetitionPermissions> {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  const res = await baseFetcher(
    `/competitions/${competitionId}/permissions/me`,
    { sessionId },
  );

  if (res.status === 404) {
    notFound();
  } else if (!res.ok) {
    throw new Error("잘못된 요청입니다.");
  }

  return (await res.json()) as CompetitionPermissions;
}
