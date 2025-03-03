export type ResType<T> = {
  code: number;
  detail?: string;
  message?: {
    [key in keyof T]?: string[];
  };
};

export type PageRes<E> = {
  totalCount: number;
  page: number;
  size: number;
  results: E[];
};

export type ActionType<T> = ResType<T> & { value: T };

export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export type SimpleAccount = {
  username: string;
  email: string;
  avatar: string | null;
};
