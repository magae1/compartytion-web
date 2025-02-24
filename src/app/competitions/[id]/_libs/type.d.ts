import { ReactNode } from "react";

export type PathParams = Promise<{ id: string }>;

export type Nav = {
  label: string;
  icon: ReactNode;
  subUrl: string;
};
