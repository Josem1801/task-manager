import React from "react";

import { Props, Box as SBox } from "./box.styles";

type BoxProps = React.HTMLAttributes<HTMLDivElement> & Props;

export const Box = ({
  children,
  display,
  justifyContent,
  alignItems,
  flexDirection,
  gap,
  padding,
  margin,
  width,
  height,
  bg,
  borderRadius,
  ...props
}: BoxProps) => {
  return (
    <SBox
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      gap={gap}
      padding={padding}
      margin={margin}
      width={width}
      height={height}
      bg={bg}
      borderRadius={borderRadius}
      {...props}
    >
      {children}
    </SBox>
  );
};
