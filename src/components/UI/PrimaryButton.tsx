import React, { ComponentPropsWithoutRef } from "react";
import SelectableWrapper from "./SelectableWrapper";

interface PrimaryButtonProps extends ComponentPropsWithoutRef<"button"> {
  rounded?: boolean;
  shadowSize?: string;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  const { rounded, shadowSize, className, children, disabled, ...rest } = props;
  return (
    <SelectableWrapper
      selected
      animationStyles={`hover:opacity-70 active:opacity-50 transition-opacity duration-200 ease-in-out ${
        disabled ? "opacity-50 pointer-events-none" : ""
      }`}
      rounded={rounded}
      shadowSize={shadowSize}
    >
      <button
        {...rest}
        className={`p-2 text-center ${className || ""}`}
        disabled={disabled}
      >
        {children}
      </button>
    </SelectableWrapper>
  );
};

export default PrimaryButton;
