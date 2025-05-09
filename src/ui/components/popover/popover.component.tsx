import { useEffect, useRef, useState } from "react";

import * as S from "./popover.styles";

type PopoverProps = {
  content: (close: () => void) => React.ReactNode;
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLElement>, "content">;

export const Popover = ({ content, children }: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popoverRef]);

  return (
    <S.PopoverContainer ref={popoverRef}>
      <div onClick={togglePopover} role="button" tabIndex={0}>
        {children || "Haz clic para abrir"}
      </div>
      <S.PopoverContent isOpen={isOpen}>
        {content(togglePopover)}
      </S.PopoverContent>
    </S.PopoverContainer>
  );
};
