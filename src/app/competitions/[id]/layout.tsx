import { ReactNode } from "react";
import { notFound } from "next/navigation";

import { MdExplore, MdHome, MdPeople, MdSettings } from "react-icons/md";

import { DRAWER_ID } from "@/libs/constants";
import { Nav, PathParams } from "@/app/competitions/[id]/_libs/type";
import Header from "@/components/Header";
import DrawerHeader from "@/components/DrawerHeader";
import HeaderButtonGroup from "@/components/HeaderButtonGroup";
import CompetitionSidebar from "@/app/competitions/[id]/_components/CompetitionSidebar";
import CompetitionNavLinkList from "@/app/competitions/[id]/_components/CompetitionNavLinkList";

interface Props {
  children: ReactNode;
  params: PathParams;
}

export default async function CompetitionLayout({ children, params }: Props) {
  const competitionId = (await params).id;
  if (isNaN(Number(competitionId))) {
    notFound();
  }

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

  return (
    <div className="drawer md:drawer-open">
      <input id={DRAWER_ID} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Header display="sticky" tail={<HeaderButtonGroup />} />
        {children}
        <div className="btm-nav md:hidden">
          <CompetitionNavLinkList navs={navs} />
        </div>
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor={DRAWER_ID}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="h-full w-72 flex-col bg-base-100 sm:w-80">
          <DrawerHeader
            display="static"
            headerUrl={`/competitions/${competitionId}`}
            hideCloseButton
          />
          <CompetitionSidebar navs={navs} />
        </div>
      </div>
    </div>
  );
}
