import { ReactNode } from "react";

import { LuMenu } from "react-icons/lu";

import DrawerHeader from "@/components/DrawerHeader";
import { DRAWER_ID } from "@/libs/constants";
import Header from "@/components/Header";
import HeaderTail from "@/components/HeaderTail";

interface Props {
  children: ReactNode;
  sidebar: ReactNode;
}

export default function MainLayout({ children, sidebar }: Props) {
  return (
    <div className="drawer lg:drawer-open">
      <input id={DRAWER_ID} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Header
          display="sticky"
          head={
            <label
              htmlFor={DRAWER_ID}
              className="btn btn-square btn-ghost btn-sm h-10 w-10 border-base-300 lg:hidden"
            >
              <LuMenu size={19} />
            </label>
          }
          tail={<HeaderTail />}
        />
        {children}
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor={DRAWER_ID}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex h-full w-72 flex-col bg-base-200 sm:w-80">
          <DrawerHeader />
          <div className="header-size" />
          <div className="flex-1 overflow-auto">{sidebar}</div>
        </div>
      </div>
    </div>
  );
}
