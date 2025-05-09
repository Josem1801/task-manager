import * as React from "react";
import { SVGProps } from "react";

import { theme } from "../theme";

const SvgComponent = ({
  color = theme.colors.secondary,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height="1em"
    viewBox="0 0 21 22"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={5.5} cy={11.1667} fill={color} r={1.5} />
    <circle cx={10.5} cy={11.1667} fill={color} r={1.5} />
    <circle cx={15.5} cy={11.1667} fill={color} r={1.5} />
  </svg>
);

export { SvgComponent as MenuDots };
