import * as React from "react";
import { SVGProps } from "react";

import { theme } from "../theme";

const SvgComponent = ({
  color = theme.colors.secondary,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={5.5} cy={11.1667} r={1.5} fill={color} />
    <circle cx={10.5} cy={11.1667} r={1.5} fill={color} />
    <circle cx={15.5} cy={11.1667} r={1.5} fill={color} />
  </svg>
);
export { SvgComponent as MenuDots };
