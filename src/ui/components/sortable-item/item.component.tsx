import React, { useEffect } from "react";

import type { DraggableSyntheticListeners } from "@dnd-kit/core";
import type { Transform } from "@dnd-kit/utilities";

import { SItem, SItemContainer } from "./item.styles";

export interface Props {
  dragOverlay?: boolean;
  color?: string;
  disabled?: boolean;
  dragging?: boolean;
  handle?: boolean;
  fadeIn?: boolean;
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  sorting?: boolean;
  style?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
  value: React.ReactNode;
  children: React.ReactNode;
}

export const Item = React.memo(
  React.forwardRef<HTMLLIElement, Props>(
    (
      {
        dragOverlay,
        dragging,
        disabled,
        fadeIn,
        handle,
        listeners,
        sorting,
        style,
        children,
        transform,
        ...props
      },
      ref,
    ) => {
      useEffect(() => {
        if (!dragOverlay) {
          return;
        }

        document.body.style.cursor = "grabbing";

        return () => {
          document.body.style.cursor = "";
        };
      }, [dragOverlay]);

      return (
        <SItemContainer
          dragOverlay={dragOverlay}
          transform={transform}
          fadeIn={fadeIn}
          ref={ref}
        >
          <SItem
            transform={transform}
            fadeIn={fadeIn}
            dragOverlay={dragOverlay}
            disabled={disabled}
            dragging={dragging}
            handle={handle}
            style={style}
            {...(!handle ? listeners : undefined)}
            {...props}
            tabIndex={!handle ? 0 : undefined}
          >
            {children}
          </SItem>
        </SItemContainer>
      );
    },
  ),
);
