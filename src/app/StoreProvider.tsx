"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, type AppStore } from "../lib/store";
import { setCoins } from "@/lib/features/coinList/coinListSlice";
import actions from "@/actions";
import { setSupportedCurrencies } from "@/lib/features/preferences/preferencesSlice";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    const loadInitialCoins = async () => {
      if (storeRef.current) {
        const coinList = await actions.getCoinsList("usd", 1, true);
        storeRef.current.dispatch(setCoins(coinList));
      }
    };

    const loadInitialCurrencies = async () => {
      if (storeRef.current) {
        const currencies = await actions.getCurrenciesList();
        storeRef.current.dispatch(setSupportedCurrencies(currencies));
      }
    };

    loadInitialCoins();
    loadInitialCurrencies();
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
