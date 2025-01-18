"use client";
import {
  useEffect,
  useState,
  type WheelEvent,
  type ReactNode,
  useRef,
} from "react";
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
  const inputRef = useRef<HTMLDivElement>(null);

  const removeBackgroundScroll = () => {
    document.body.classList.add("overflow-hidden");
  };

  const addBackgroundScroll = () => {
    document.body.classList.remove("overflow-hidden");
  };

  const handleBackgroundClick = () => {
    setIsOpen(false);
  };

  const handleInputClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      inputRef.current?.classList.add("mouse-events-none");
    }
  };

  const renderDropdownItems = () => {
    if (!data || !renderItem) return null;
    return data.map((item) => (
      <div key={keyExtractor ? keyExtractor(item) : Math.random()}>
        {renderItem(item)}
      </div>
    ));
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const atTop = target.scrollTop === 0;
    const atBottom =
      target.scrollHeight - target.scrollTop === target.clientHeight;

    if ((atTop && event.deltaY < 0) || (atBottom && event.deltaY > 0)) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (isOpen) {
      removeBackgroundScroll();
    } else {
      addBackgroundScroll();
    }
    return () => {
      addBackgroundScroll();
    };
  }, [isOpen]);
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
        className={`relative ${
          isOpen ? "z-50" : "z-40"
        } active:opacity-50 ${containerClassName}`}
        onClick={handleInputClick}
        ref={inputRef}
      >
        {children}
        {isOpen && (
          <div className={`absolute ${menuClassName}`} onWheel={handleWheel}>
            {renderDropdownItems()}
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
