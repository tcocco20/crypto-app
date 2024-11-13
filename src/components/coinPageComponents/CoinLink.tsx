"use client";

import { Copy, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Card from "../UI/Card";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "@/lib/hooks";

interface CoinLinkProps {
  url: string;
}

const CoinLink = ({ url }: CoinLinkProps) => {
  const darkMode = useAppSelector((state) => state.preferences.darkMode);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.info("Link copied to clipboard", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        theme: darkMode ? "dark" : "light",
      });
    } catch (err) {
      toast.error("Failed to copy link", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        theme: darkMode ? "dark" : "light",
      });
    }
  };
  return (
    <Card className="flex justify-center gap-4 py-4">
      <Link
        href={url}
        target="_blank"
        className="active:opacity-50 hover:opacity-80"
      >
        <LinkIcon size={24} />
      </Link>
      <p>{url}</p>
      <button
        className="active:opacity-50 hover:opacity-80"
        onClick={handleCopyClick}
      >
        <Copy size={24} />
      </button>
    </Card>
  );
};

export default CoinLink;
