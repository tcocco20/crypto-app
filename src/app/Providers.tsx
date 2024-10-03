"use client";
import { type ReactNode } from "react";
import StoreProvider from "@/app/StoreProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default Providers;
