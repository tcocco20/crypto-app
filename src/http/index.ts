import { testConnection } from "./testConnection";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const http = {
  testConnection,
};
