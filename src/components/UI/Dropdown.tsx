"use client";
import { useState, type ReactNode } from "react";
import Portal from "./Portal";

interface DropdownProps<T> {
  containerClassName?: string;
  menuClassName?: string;
  children: ReactNode;
  data?: T[];
  renderItem?: (item: T) => ReactNode;
  keyExtractor?: (item: T) => string;
}

function Dropdown<C>({
  containerClassName,
  children,
  menuClassName,
  data,
  renderItem,
  keyExtractor,
}: DropdownProps<C>) {
  const [isOpen, setIsOpen] = useState(false);

  const handleBackgroundClick = () => {
    setIsOpen(false);
  };

  const handleInputClick = () => {
    setIsOpen((prev) => !prev);
  };

  const renderDropdownItems = () => {
    if (!data || !renderItem) return null;
    return data.map((item) => (
      <div key={keyExtractor ? keyExtractor(item) : Math.random()}>
        {renderItem(item)}
      </div>
    ));
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
          <div className={`absolute ${menuClassName}`}>
            {renderDropdownItems()}
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
