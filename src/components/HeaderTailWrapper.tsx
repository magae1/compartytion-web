"use client";

import { ReactNode } from "react";

import { ErrorBoundary } from "react-error-boundary";

import LoginButton from "@/components/LoginButton";

interface Props {
  children: ReactNode;
}

export default function HeaderTailWrapper({ children }: Props) {
  return (
    <ErrorBoundary
      fallback={<LoginButton />}
      onError={() => fetch("/api/logout", { method: "POST" })}
    >
      {children}
    </ErrorBoundary>
  );
}
