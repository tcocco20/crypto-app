"use server";
export async function getCoinsList() {
  const url = "https://api.coingecko.com/api/v3/coins/list";
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": process.env.API_SECRET_KEY,
    } as HeadersInit,
  };

  const data = await fetch(url, options);
  return data.json();
}
