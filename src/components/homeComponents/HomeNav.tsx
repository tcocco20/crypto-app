import React from "react";
import SelectableWrapper from "../UI/SelectableWrapper";
import Link from "next/link";

const HomeNav = () => {
  return (
    <div className="py-1 px-2 bg-violet-900/20 hidden md:flex items-center rounded-md self-start gap-1 my-10">
      <SelectableWrapper py="py-3" selected>
        <Link href="/home" className="text-white px-28">
          Coins
        </Link>
      </SelectableWrapper>
      <SelectableWrapper py="py-3" selected={false}>
        <Link href="/converter" className="text-white px-28">
          Converter
        </Link>
      </SelectableWrapper>
    </div>
  );
};

export default HomeNav;
