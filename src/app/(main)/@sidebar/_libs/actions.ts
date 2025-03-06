"use server";

import { cookies } from "next/headers";

import { SESSION_COOKIE_NAME } from "@/libs/constants";
import { baseFetcher } from "@/libs/fetchers";
import { PageRes } from "@/libs/type";
import {
  CompetitionTitleResponse,
  JoinCompetitionState,
} from "@/app/(main)/@sidebar/_libs/type";

export async function getJoinedCompetitionList(
  page = 1,
): Promise<JoinCompetitionState> {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const pageResponse = await baseFetcher(`/competitions/join/me?page=${page}`, {
    sessionId,
  }).then(async (r) => (await r.json()) as PageRes<CompetitionTitleResponse>);

  const nextPage: number | null =
    page + 1 <= Math.ceil(pageResponse.totalCount / pageResponse.size)
      ? page + 1
      : null;

  const list = pageResponse.results.map((r) => ({
    title: r.title,
    link: `/grounds/${r.id}`,
  }));

  return {
    next: nextPage,
    results: list,
  };
}
