export type SimpleCompetitionResponse = {
  id: number;
  title: string;
  introduction: string;
  creator: {
    username: string;
    avatar: string | null;
  };
  status: "모집중" | "준비중" | "진행중" | "종료";
  createdAt: Date;
  isTeamGame: boolean;
  isPublic: boolean;
};

export type CompetitionPreview = {
  title: string;
  introduction: string;
  creator: {
    username: string;
    avatar: string | null;
  };
  createdAt: Date;
  isOnRecruiting: boolean;
  badges: string[];
};
