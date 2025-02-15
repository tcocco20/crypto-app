"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, type AppStore } from "../lib/store";
import { loadCoins } from "@/lib/features/coinList/coinListSlice";
import actions from "@/actions";

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
        storeRef.current.dispatch(loadCoins(coinList));
      }
    };
    loadInitialCoins();
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
