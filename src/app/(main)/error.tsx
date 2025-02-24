"use client";

import { useEffect } from "react";

import { ErrorProps } from "@/libs/type";
import ErrorWrapper from "@/components/ErrorWrapper";

export default function MainError({ error }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorWrapper>
      <p>{error.message}</p>
    </ErrorWrapper>
  );
}
