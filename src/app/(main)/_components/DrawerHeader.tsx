import Link from "next/link";

import { MdClose } from "react-icons/md";

import Header from "@/components/Header";

interface Props {
  drawerId: string;
}

export default function DrawerHeader({ drawerId }: Props) {
  return (
    <Header
      display="static"
      head={
        <Link href="/" className="btn btn-ghost no-animation">
          Compartytion
        </Link>
      }
      center={false}
      tail={
        <label
          htmlFor={drawerId}
          aria-label="close sidebar"
          className="btn btn-square btn-ghost btn-sm lg:hidden"
        >
          <MdClose size={21} />
        </label>
      }
    />
  );
}
