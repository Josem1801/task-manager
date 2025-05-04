import * as React from "react";
import { SVGProps } from "react";

import { theme } from "../theme";

const SvgComponent = ({
  color = theme.colors.secondary,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    fill={color}
    strokeWidth={0}
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14 7v1H8v6H7V8H1V7h6V1h1v6h6z" />
  </svg>
);
export { SvgComponent as Add };
