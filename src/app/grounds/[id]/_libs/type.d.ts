import { ReactNode } from "react";

export type Nav = {
  label: string;
  icon: ReactNode;
  subUrl: string;
};

export type CompetitionPermissions = {
  isManager: boolean;
  isParticipant: boolean;
};
