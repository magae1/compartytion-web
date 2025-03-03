export type CompetitionTitleResponse = {
  id: number;
  title: string;
};

export type JoinCompetitionState = {
  next: number | null;
  results: CompetitionTitleAndLink[];
};

export type CompetitionTitleAndLink = {
  title: string;
  link: string;
};
