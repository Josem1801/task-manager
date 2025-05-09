import * as React from "react";
import { SVGProps } from "react";

import { theme } from "../theme";

const SvgComponent = ({
  color = theme.colors.secondary,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    fill={color}
    height="1em"
    stroke="currentColor"
    strokeWidth={0}
    viewBox="0 0 16 16"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14 7v1H8v6H7V8H1V7h6V1h1v6h6z" />
  </svg>
);

export { SvgComponent as Add };
