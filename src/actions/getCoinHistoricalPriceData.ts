"use server";

export const getCoinHistoricalPriceData = async () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1";
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": process.env.API_SECRET_KEY,
    } as HeadersInit,
  };

  const response = await fetch(url, options);
  return response;
};
