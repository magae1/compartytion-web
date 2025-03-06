import { BASE_HEADERS, BASE_URL, SESSION_COOKIE_NAME } from "@/libs/constants";

interface Options extends RequestInit {
  method?: "POST" | "PATCH" | "GET" | "DELETE";
  sessionId?: string;
}

export const baseFetcher = async (
  subUrl: string,
  options: Options,
): Promise<Response> => {
  const { method = "GET", headers, body, sessionId } = options;
  const baseHeader = sessionId
    ? {
        ...BASE_HEADERS,
        ...headers,
        Cookie: `${SESSION_COOKIE_NAME}=${sessionId}; HttpOnly`,
      }
    : {
        ...BASE_HEADERS,
        ...headers,
      };

  try {
    return await fetch(BASE_URL + subUrl, {
      ...options,
      method: method,
      headers: baseHeader,
      body: body,
    });
  } catch (e) {
    if (e instanceof Error) {
      if (e.cause instanceof AggregateError) {
        throw new Error(e.cause.errors[0].code);
      }
      throw new Error(e.message);
    } else {
      throw new Error("알 수 없는 오류가 발생했습니다.");
    }
  }
};

export async function sleep(ms: number = 3000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
