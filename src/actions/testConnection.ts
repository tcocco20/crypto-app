"use server";

export const testConnection = async () => {
  interface Response {
    gecko_says: string;
  }
  const url = "https://api.coingecko.com/api/v3/ping";
  const apiKey = process.env.API_SECRET_KEY;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": apiKey,
    },
  } as RequestInit;

  if (!apiKey) {
    throw new Error("API key is missing");
  }
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to connect to CoinGecko API");
  }
  return response.json() as Promise<Response>;
};
