"use client";

import { useState, useTransition } from "react";
import Link from "next/link";

import { JoinCompetitionState } from "@/app/(main)/@sidebar/_libs/type";
import { getJoinedCompetitionList } from "@/app/(main)/@sidebar/_libs/actions";

interface Props {
  initCompetitionList: JoinCompetitionState;
}

export default function JoinedCompetitionList({ initCompetitionList }: Props) {
  const [isPending, startTransition] = useTransition();
  const [competitionList, setCompetitionList] = useState<
    JoinCompetitionState[]
  >([initCompetitionList]);

  const addCompetitionList = (page: number | null) => {
    if (isPending || !page) return;
    startTransition(async () => {
      const res = await getJoinedCompetitionList(page);
      setCompetitionList((prev) => [...prev, res]);
    });
  };

  const last = competitionList.at(competitionList.length - 1);

  return (
    <ul className="menu w-full">
      <li className="menu-title">참여 중인 대회</li>
      {competitionList.length > 0 ? (
        competitionList.map((c, i) =>
          c.results.map((l, j) => (
            <li key={i * 5 + j}>
              <Link href={l.link}>{l.title}</Link>
            </li>
          )),
        )
      ) : (
        <p className="my-3 text-center text-sm">참여 중인 대회가 없습니다.</p>
      )}
      {last && last.next != null && (
        <li className="text-accent/45 hover:text-accent text-xs">
          <button
            disabled={isPending}
            onClick={() => addCompetitionList(last.next)}
          >
            더보기
          </button>
        </li>
      )}
    </ul>
  );
}
