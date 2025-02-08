"use client";

import Link from "next/link";

interface Props {
  isAuthenticated?: boolean;
}

export default function HeaderButtonGroup({ isAuthenticated = false }: Props) {
  if (!isAuthenticated) {
    return (
      <Link href="/login" className="btn btn-accent btn-sm">
        로그인
      </Link>
    );
  }

  return <div></div>;
}
