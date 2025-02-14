import DrawerHeader from "@/app/(main)/_components/DrawerHeader";

interface Props {
  drawerId: string;
}

export default function DrawerSidebar({ drawerId }: Props) {
  return (
    <div className="h-full bg-base-200">
      <DrawerHeader drawerId={drawerId} />
      <ul className="menu w-72 sm:w-80">
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </div>
  );
}
