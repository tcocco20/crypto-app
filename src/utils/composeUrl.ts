export function composeUrl<T extends Record<string, any>>(
  url: string,
  variables: T | undefined
): string {
  if (!variables) {
    return url;
  }
  return new Function(...Object.keys(variables), `return \`${url}\`;`)(
    ...Object.values(variables)
  );
}
