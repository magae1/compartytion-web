"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { ErrorProps } from "@/libs/type";
import ErrorWrapper from "@/components/ErrorWrapper";

export default function CompetitionsError({ error }: ErrorProps) {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorWrapper fill headline="대회에 접속할 수 없습니다.">
      <p>
        {error.message}{" "}
        <Link href="/login" className="link link-primary">
          로그인
        </Link>{" "}
        이후 다시 접속하거나,{" "}
        <Link
          href={`/previews/competitions/${id}`}
          className="link link-primary"
        >
          대회 참가 신청
        </Link>
        을 해주세요.
      </p>
    </ErrorWrapper>
  );
}
