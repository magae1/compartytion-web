import CompetitionNavLink from "@/app/competitions/[id]/_components/CompetitionNavLink";
import { Nav } from "@/app/competitions/[id]/_libs/type";

interface Props {
  navs: Nav[];
}

export default function CompetitionSidebar({ navs }: Props) {
  return (
    <ul className="menu menu-lg">
      {navs.map((n) => {
        return (
          <li key={n.label}>
            <CompetitionNavLink
              label={n.label}
              subUrl={n.subUrl}
              icon={n.icon}
            />
          </li>
        );
      })}
    </ul>
  );
}
