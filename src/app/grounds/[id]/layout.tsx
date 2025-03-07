import { ReactNode } from "react";
import { notFound } from "next/navigation";

import { MdExplore, MdHome, MdPeople, MdSettings } from "react-icons/md";

import { DRAWER_ID } from "@/libs/constants";
import { Nav } from "@/app/grounds/[id]/_libs/type";
import DrawerHeader from "@/components/DrawerHeader";
import CompetitionSidebar from "@/app/grounds/[id]/_components/CompetitionSidebar";
import CompetitionNavLinkList from "@/app/grounds/[id]/_components/CompetitionNavLinkList";
import { checkPermission } from "@/app/grounds/[id]/_libs/actions";
import { PathParams } from "@/libs/type";

const navs: Nav[] = [
  {
    label: "홈",
    icon: <MdHome size={21} />,
    subUrl: "home",
  },
  {
    label: "탐색",
    icon: <MdExplore size={21} />,
    subUrl: "explore",
  },
  {
    label: "관리",
    icon: <MdPeople size={21} />,
    subUrl: "manage",
  },
  {
    label: "설정",
    icon: <MdSettings size={21} />,
    subUrl: "settings",
  },
];

interface Props {
  children: ReactNode;
  params: PathParams;
}

export default async function CompetitionLayout({ children, params }: Props) {
  const competitionId = (await params).id;
  if (isNaN(Number(competitionId))) {
    notFound();
  }

  const permissions = await checkPermission(competitionId);

  if (!permissions.isManager && !permissions.isParticipant) {
    throw new Error("접근할 수 없는 대회입니다.");
  }

  const filteredNavs = navs.filter(
    (n) => permissions.isManager || n.label !== "관리",
  );

  return (
    <div className="drawer md:drawer-open">
      <input id={DRAWER_ID} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex min-h-screen flex-col">
        <div className="header-size" />
        <div className="flex-1">{children}</div>
        <div className="dock md:hidden">
          <CompetitionNavLinkList navs={filteredNavs} />
        </div>
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor={DRAWER_ID}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-base-100 flex h-full w-72 flex-col sm:w-80">
          <DrawerHeader hideCloseButton />
          <div className="header-size" />
          <div className="flex-1 overflow-auto">
            <CompetitionSidebar navs={filteredNavs} />
          </div>
        </div>
      </div>
    </div>
  );
}
