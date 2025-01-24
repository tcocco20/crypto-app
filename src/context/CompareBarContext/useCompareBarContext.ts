import { useContext } from "react";
import CompareBarContext from "./CompareBarContextProvider";

export const useCompareBarContext = () => {
  const context = useContext(CompareBarContext);
  if (!context) {
    throw new Error(
      "useCompareBarContext must be used within a CompareBarContextProvider"
    );
  }
  return context;
};
