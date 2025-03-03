import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import SidebarError from "@/app/(main)/@sidebar/_components/SidebarError";
import SectionSpinner from "@/app/(main)/@sidebar/_components/SectionSpinner";
import JoinedCompetitionList from "@/app/(main)/@sidebar/_components/JoinedCompetitionList";
import { getJoinedCompetitionList } from "@/app/(main)/@sidebar/_libs/actions";

export default async function Default() {
  const joinCompetitionState = await getJoinedCompetitionList();

  return (
    <ErrorBoundary fallback={<SidebarError />}>
      <Suspense fallback={<SectionSpinner />}>
        <div>
          <JoinedCompetitionList initCompetitionList={joinCompetitionState} />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
