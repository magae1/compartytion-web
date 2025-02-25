"use server";

import { cookies } from "next/headers";

import { SESSION_COOKIE_NAME } from "@/libs/constants";
import { baseFetcher } from "@/libs/fetchers";
import { CompetitionPermissions } from "@/app/competitions/[id]/_libs/type";

export async function checkPermission(competitionId: string) {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  /*
    const res = await baseFetcher(
      `/competitions/${competitionId}/permissions/me`,
      { sessionId },
    );

    if (!res.ok) {
      throw new Error("잘못된 요청입니다.");
    }

    const data = (await res.json()) as CompetitionPermissions;
    if (!data.isParticipant && !data.isManager) {
      throw new Error("대회 접근 권한이 없습니다.");
    }

    return data.isManager;

   */
  return true;
}
