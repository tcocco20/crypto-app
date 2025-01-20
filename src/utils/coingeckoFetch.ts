"use server";

import { composeUrl } from "./composeUrl";
import { ExtractVariables } from "./types/ExtractVariables";

export const coingeckoFetch = async <T>({
  cache = "force-cache",
  headers,
  baseUrl,
  variables,
}: {
  cache?: RequestCache;
  headers?: HeadersInit;
  baseUrl: string;
  variables?: ExtractVariables<T>;
}): Promise<{ status: number; body: T } | never> => {
  const url = composeUrl(baseUrl, variables);
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": process.env.API_SECRET_KEY,
      ...headers,
    } as HeadersInit,
    cache,
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to connect to CoinGecko API");
  }
  const body = await response.json();
  
  return { status: response.status, body };
};
