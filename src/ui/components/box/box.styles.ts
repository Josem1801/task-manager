// Box.tsx
import { ThemeType } from "@/ui/styled";
import styled from "styled-components";

export type Props = {
  display?: "flex" | "grid" | "block" | "inline-block";
  flexDirection?: "row" | "column";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  alignItems?: string;
  gap?: number;
  padding?: number | string;
  margin?: number | string;
  width?: number | string;
  border?: string;
  position?: "absolute" | "relative";
  top?: number;
  right?: number;
  bottom?: number;
  maxWidth?: keyof ThemeType["breakpoints"] | number;
  left?: number;
  height?: number | string;
  overflow?: "hidden" | "auto" | "scroll" | "visible";
  columns?: number;
  bg?: string;
  borderRadius?: number;
  hiddenAt?: "mobile" | "tablet" | "desktop";
};

const hiddenAtBreakpoints: Record<"mobile" | "tablet" | "desktop", number> = {
  mobile: 600,
  tablet: 900,
  desktop: 1200,
};

const setStyle = (prop?: string | number, cssProp?: string) => {
  if (!prop) return "";
  if (typeof prop === "number") return `${cssProp}: ${prop}px;`;
  return `${cssProp}: ${prop};`;
};

export const Box = styled.div.attrs(() => ({}))<Props>`
  ${({ display }) => setStyle(display, "display")}
  ${({ flexDirection }) => setStyle(flexDirection, "flex-direction")}
    ${({ justifyContent }) => setStyle(justifyContent, "justify-content")}
    ${({ alignItems }) => setStyle(alignItems, "align-items")}
    ${({ gap }) => setStyle(gap, "gap")}
    ${({ padding }) => setStyle(padding, "padding")}
    ${({ margin }) => setStyle(margin, "margin")}
    ${({ width }) => setStyle(width, "width")}
    ${({ height }) => setStyle(height, "height")}
    ${({ overflow }) => setStyle(overflow, "overflow")}
    ${({ bg }) => setStyle(bg, "background")}
    ${({ borderRadius }) => setStyle(borderRadius, "border-radius")}
    ${({ columns }) =>
    columns ? `grid-template-columns: repeat(${columns}, 1fr);` : ""}
    ${({ position }) => setStyle(position, "position")}
    ${({ top }) => setStyle(top, "top")}
    ${({ right }) => setStyle(right, "right")}
    ${({ bottom }) => setStyle(bottom, "bottom")}
    ${({ left }) => setStyle(left, "left")}

    ${({ wrap }) => setStyle(wrap, "flex-wrap")}
    ${({ border }) => setStyle(border, "border")}
    ${({ hiddenAt }) =>
    hiddenAt &&
    `@media (max-width: ${hiddenAtBreakpoints[hiddenAt]}px) { display: none; }`}

    ${({ maxWidth, theme }) =>
    maxWidth && typeof maxWidth === "string"
      ? `max-width: ${theme.breakpoints[maxWidth]}px;`
      : setStyle(maxWidth, "max-width")}
`;
