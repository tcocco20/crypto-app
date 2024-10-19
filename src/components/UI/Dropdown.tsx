"use client";
import { type ReactNode } from "react";

interface DropdownProps {
  containerClassName?: string;
  children: ReactNode;
}

const Dropdown = ({ containerClassName, children }: DropdownProps) => {
  return (
    <>
      <div className={containerClassName}>{children}</div>
    </>
  );
};

export default Dropdown;
