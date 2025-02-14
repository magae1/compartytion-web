"use client";

import { ReactNode, useCallback } from "react";
import { useRouter } from "next/navigation";

interface Props {
  icon?: ReactNode;
}

export default function LogoutButton({ icon }: Props) {
  const router = useRouter();

  const handleClick = useCallback(() => {
    fetch("/api/logout", { method: "POST" }).then(() => {
      router.refresh();
    });
  }, []);

  return (
    <button onClick={handleClick} className="hover:bg-red-500 hover:text-white">
      {icon}
      로그아웃
    </button>
  );
}
