"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

interface Props {
  icon?: ReactNode;
  subUrl: string;
  label: string;
}

export default function CompetitionNavLink({ icon, subUrl, label }: Props) {
  const paths = usePathname().split("/");
  const isActive = paths.pop() === subUrl;
  const id = useParams<{ id: string }>().id;

  return (
    <Link
      href={`/grounds/${id}/${subUrl}`}
      replace={true}
      className={`${isActive && "menu-active dock-active"}`}
    >
      {icon}
      {label}
    </Link>
  );
}
