"use client";
import { useState, type ReactNode } from "react";
import Portal from "./Portal";

interface DropdownProps {
  containerClassName?: string;
  children: ReactNode;
}

const Dropdown = ({ containerClassName, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBackgroundClick = () => {
    setIsOpen(false);
  };

  const handleInputClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      {isOpen && (
        <Portal>
          <div
            className="absolute top-0 left-0 right-0 bottom-0 z-40"
            onClick={handleBackgroundClick}
          ></div>
        </Portal>
      )}
      <div
        className={`relative z-50 active:opacity-50 ${containerClassName}`}
        onClick={handleInputClick}
      >
        {children}
        {isOpen && (
          <div className="absolute top-full w-full bg-black/30 mt-1">
            Dropdown content
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
