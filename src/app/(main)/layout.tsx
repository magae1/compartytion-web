import { ReactNode } from "react";

import MainHeader from "@/app/(main)/_components/MainHeader";
import DrawerSidebar from "@/app/(main)/_components/DrawerSidebar";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  const drawerId: string = "mainDrawer";

  return (
    <div className="drawer lg:drawer-open">
      <input id={drawerId} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <MainHeader drawerId={drawerId} />
        {children}
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor={drawerId}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <DrawerSidebar drawerId={drawerId} />
      </div>
    </div>
  );
}
