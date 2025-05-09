import * as React from "react";
import { SVGProps } from "react";

import { theme } from "../theme";

const SvgComponent = ({
  color = theme.colors.secondary,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill={color}
    height="1em"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { SvgComponent as DotsHorizontal };
