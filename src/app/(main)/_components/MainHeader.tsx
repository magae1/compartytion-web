import { LuMenu } from "react-icons/lu";

import Header from "@/components/Header";
import HeaderButtonGroup from "@/components/HeaderButtonGroup";

interface Props {
  drawerId: string;
}

export default function MainHeader({ drawerId }: Props) {
  return (
    <Header
      display="sticky"
      head={
        <label
          htmlFor={drawerId}
          className="btn btn-square btn-ghost btn-sm h-10 w-10 border-base-300 lg:hidden"
        >
          <LuMenu size={19} />
        </label>
      }
      tail={<HeaderButtonGroup />}
    />
  );
}
