"use client";
import { useAppSelector } from "@/lib/hooks";
import React from "react";
import { ClipLoader } from "react-spinners";

const SearchLoader = () => {
  const darkMode = useAppSelector((state) => state.preferences.darkMode);
  const color = darkMode ? "#8e9deb" : "#373878";
  return (
    <div className="p-4 text-center">
      <ClipLoader color={color} size={32} />
    </div>
  );
};

export default SearchLoader;
