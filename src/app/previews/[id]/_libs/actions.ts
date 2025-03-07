"use server";

import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { SESSION_COOKIE_NAME } from "@/libs/constants";
import { baseFetcher } from "@/libs/fetchers";
import {
  CompetitionPreview,
  SimpleCompetitionResponse,
} from "@/app/previews/[id]/_libs/type";

export async function getCompetitionPreview(
  competitionId: string,
): Promise<CompetitionPreview> {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  const res = await baseFetcher(`/competitions/${competitionId}/simple`, {
    sessionId,
  });

  if (!res.ok) {
    notFound();
  }

  const data = (await res.json()) as SimpleCompetitionResponse;

  return {
    title: data.title,
    introduction: data.introduction,
    isOnRecruiting: data.status === "모집중",
    creator: data.creator,
    createdAt: data.createdAt,
    badges: [data.status],
  };
}
