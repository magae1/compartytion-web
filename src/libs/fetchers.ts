import { BASE_HEADERS, BASE_URL } from "@/libs/constants";

interface Options extends RequestInit {
  method?: "POST" | "PATCH" | "GET" | "DELETE";
}

export const baseFetcher = (subUrl: string, options: Options) => {
  const { method = "GET", headers, body } = options;
  return fetch(BASE_URL + subUrl, {
    ...options,
    method: method,
    headers: { ...BASE_HEADERS, ...headers },
    body: body,
  });
};
