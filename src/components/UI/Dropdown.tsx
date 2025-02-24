"use client";
import { useState, type ReactNode } from "react";
import Portal from "./Portal";

interface DropdownProps<T> {
  containerClassName?: string;
  menuClassName?: string;
  parentClassName?: string;
  children: ReactNode;
  data?: T[];
  renderItem?: (item: T) => ReactNode;
  keyExtractor?: (item: T) => string;
  onBackgroundClick?: () => void;
}

function Dropdown<T>({
  containerClassName,
  children,
  menuClassName,
  parentClassName,
  data,
  renderItem,
  keyExtractor,
  onBackgroundClick,
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  const handleBackgroundClick = () => {
    setIsOpen(false);
    if (onBackgroundClick) {
      onBackgroundClick();
    }
  };

  const handleInputClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const renderDropdownItems = () => {
    if (!data || !renderItem)
      return <div className="p-4 text-center">No items to display</div>;
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
      <div className={`relative ${parentClassName}`}>
        <div
          className={`${
            isOpen ? "z-50" : "z-40"
          } ${containerClassName} active:opacity-50`}
          onClick={handleInputClick}
        >
          {children}
        </div>
        {isOpen && (
          <div className={`absolute min-w-36 ${menuClassName}`}>
            {renderDropdownItems()}
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
