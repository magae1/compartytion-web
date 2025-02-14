import { BASE_HEADERS, BASE_URL, SESSION_COOKIE_NAME } from "@/libs/constants";

interface Options extends RequestInit {
  method?: "POST" | "PATCH" | "GET" | "DELETE";
  sessionId?: string;
}

export const baseFetcher = (subUrl: string, options: Options) => {
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
  return fetch(BASE_URL + subUrl, {
    ...options,
    method: method,
    headers: baseHeader,
    body: body,
  });
};

export async function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 3000));
}
