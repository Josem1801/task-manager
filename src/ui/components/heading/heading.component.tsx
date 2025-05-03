import React from "react";

import { ThemeType } from "@/ui/styled";

import { Heading as SHeading } from "./heading.styles";

type Variant = "h1" | "h2" | "h3" | "h4";

export type HeadingProps = {
  variant: Variant;
  color?: keyof ThemeType["colors"];
};

type HeadingComponentProps = React.ComponentPropsWithoutRef<"h1"> &
  HeadingProps;
export const Heading = ({
  variant,
  color = "primary",
  ...props
}: HeadingComponentProps) => {
  return <SHeading as={variant} variant={variant} color={color} {...props} />;
};
