"use server";

export interface CoinData {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export async function getCoinsList(currency = "usd", page = 1) {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&category=layer-1&order=market_cap_desc&per_page=50&page=${page}`;
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
  return (await response.json()) as Promise<CoinData[]>;
}
