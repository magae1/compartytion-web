export type ResType<T> = {
  code: number;
  detail?: string;
  message?: {
    [key in keyof T]?: string[];
  }
}

export type ActionType<T> = ResType<T> & { value: T };

export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}