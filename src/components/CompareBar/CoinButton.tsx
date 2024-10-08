import React from "react";
import SelectableWrapper from "../UI/SelectableWrapper";
import Image from "next/image";

interface CoinButtonProps {
  selected?: boolean;
  name: string;
  image: string;
  onClick?: () => void;
}

const CoinButton = ({
  selected = false,
  name,
  image,
  onClick,
}: CoinButtonProps) => {
  return (
    <SelectableWrapper selected={selected} widthClasses="w-fit">
      <button
        onClick={onClick}
        className={`p-3 w-full rounded-md flex items-center gap-2 ${
          !selected ? "bg-white dark:bg-violet-950" : ""
        }`}
      >
        <Image src={image} alt={name} width={24} height={24} />
        {name.toUpperCase()}
      </button>
    </SelectableWrapper>
  );
};

export default CoinButton;
