"use client";
import { useState, type ReactNode } from "react";

interface DropdownProps<T> {
  containerClassName?: string;
  menuClassName?: string;
  parentClassName?: string;
  children: ReactNode;
  data?: T[];
  renderItem?: (item: T, index?: number, arr?: T[]) => ReactNode;
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
    if (!data || !renderItem || data.length === 0)
      return <div className="p-4 text-center">No items to display</div>;

    return data.map((item, index, arr) => {
      const safeRenderItem: (item: T, index?: number, arr?: T[]) => ReactNode =
        renderItem;
      return (
        <div
          key={keyExtractor ? keyExtractor(item) : Math.random()}
          onClick={handleBackgroundClick}
        >
          {safeRenderItem(item, index, arr)}
        </div>
      );
    });
  };

  return (
    <>
      <div className={`relative ${parentClassName}`}>
        {isOpen && (
          <div
            className="absolute left-[-5000px] top-[-5000px] h-[10000px] w-[10000px] z-30"
            onClick={handleBackgroundClick}
          ></div>
        )}
        <div
          className={`${
            isOpen ? "z-50" : "z-40"
          } ${containerClassName} active:opacity-50`}
          onClick={handleInputClick}
        >
          {children}
        </div>
        {isOpen && (
          <div
            className={`absolute min-w-16 md:min-w-20 z-50 backdrop-blur ${menuClassName}`}
          >
            {renderDropdownItems()}
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
