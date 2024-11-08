export async function get24hVolumeInCurrency(id: string, currency = "usd") {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${currency}&include_24hr_vol=true`;
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
  const responseObj = await response.json();
  const priceObj = responseObj[id];
  if (priceObj[`${currency}_24h_vol`]) {
    return priceObj[`${currency}_24h_vol`] as number;
  }
  return null;
}
