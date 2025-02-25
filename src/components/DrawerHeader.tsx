import { ReactNode } from "react";

import { MdClose } from "react-icons/md";

import Header from "@/components/Header";
import { DRAWER_ID } from "@/libs/constants";

interface Props {
  head?: ReactNode;
  display?: "fixed" | "static" | "sticky";
  hideCloseButton?: boolean;
}

export default function DrawerHeader({
  head,
  display,
  hideCloseButton = false,
}: Props) {
  return (
    <Header
      head={head}
      display={display}
      center={false}
      tail={
        <label
          htmlFor={DRAWER_ID}
          aria-label="close sidebar"
          className={`btn btn-square btn-ghost btn-sm ${hideCloseButton ? "hidden" : "lg:hidden"}`}
        >
          <MdClose size={21} />
        </label>
      }
    />
  );
}
