import React from "react";
import SelectableWrapper from "../UI/SelectableWrapper";
import Image from "next/image";

interface CoinButtonProps {
  selected?: boolean;
  name: string;
  image: string;
}

const CoinButton = ({ selected = false, name, image }: CoinButtonProps) => {
  return (
    <SelectableWrapper selected={selected} widthClasses="w-[100px]">
      <button
        className={`p-3 w-full rounded-md flex items-center gap-2 ${
          !selected ? "dark:bg-violet-950" : ""
        }`}
      >
        <Image src={image} alt={name} width={24} height={24} />
        {name.toUpperCase()}
      </button>
    </SelectableWrapper>
  );
};

export default CoinButton;
