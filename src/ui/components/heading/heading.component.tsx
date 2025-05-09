import React from "react";

import { ThemeType } from "@/ui/styled";

import { Heading as SHeading } from "./heading.styles";

type Variant = "h1" | "h2" | "h3" | "h4" | "header";

export type HeadingProps = {
  variant: Variant;
  color?: keyof ThemeType["colors"];
  weight?: "normal" | "medium" | "bold";
  underline?: boolean;
};

type HeadingComponentProps = React.ComponentPropsWithoutRef<"h1"> &
  HeadingProps;

export const Heading = ({
  variant,
  color = "primary",
  underline = false,
  children,
  weight = "normal",
  ...props
}: HeadingComponentProps) => {
  return (
    <SHeading
      as={variant}
      color={color}
      underline={underline}
      variant={variant}
      weight={weight}
      {...props}
    >
      {children}
    </SHeading>
  );
};
