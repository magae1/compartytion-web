import CompetitionNavLink from "@/app/grounds/[id]/_components/CompetitionNavLink";
import { Nav } from "@/app/grounds/[id]/_libs/type";

interface Props {
  navs: Nav[];
}

export default function CompetitionNavLinkList({ navs }: Props) {
  return (
    <>
      {navs.map((n) => (
        <CompetitionNavLink
          key={n.label}
          label={n.label}
          subUrl={n.subUrl}
          icon={n.icon}
        />
      ))}
    </>
  );
}
