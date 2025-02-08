export const parseCookie = (val: string) => {
  return val
    .split(";")
    .map((s) => s.split("="))
    .reduce(
      (acc, v) => {
        const [key, val] = v;
        acc[decodeURIComponent(key.trim())] = decodeURIComponent(val?.trim());
        return acc;
      },
      {} as { [key: string]: string | undefined },
    );
};
