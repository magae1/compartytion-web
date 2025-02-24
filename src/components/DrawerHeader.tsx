import Link from "next/link";

import { MdClose } from "react-icons/md";

import Header from "@/components/Header";
import { DRAWER_ID } from "@/libs/constants";

interface Props {
  headerUrl?: string;
  display?: "fixed" | "static" | "sticky";
  hideCloseButton?: boolean;
}

export default function DrawerHeader({
  headerUrl = "/",
  display,
  hideCloseButton = false,
}: Props) {
  return (
    <Header
      head={
        <Link href={headerUrl} className="btn btn-ghost no-animation">
          Compartytion
        </Link>
      }
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
