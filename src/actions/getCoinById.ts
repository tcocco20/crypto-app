import { type IndividualCoin } from "@/lib/types/IndividualCoin";

export async function getCoinById(id: string) {
  const url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false`;
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": process.env.API_SECRET_KEY,
    } as HeadersInit,
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to connect to CoinGecko API");
  }
  return (await response.json()) as Promise<IndividualCoin>;
}
