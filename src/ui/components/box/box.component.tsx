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
      alignItems={alignItems}
      bg={bg}
      borderRadius={borderRadius}
      display={display}
      flexDirection={flexDirection}
      gap={gap}
      height={height}
      justifyContent={justifyContent}
      margin={margin}
      padding={padding}
      width={width}
      {...props}
    >
      {children}
    </SBox>
  );
};
