"use client";

import { ReactNode } from "react";

import GlobalStyle from "@/ui/global-styles";
import { theme } from "@/ui/theme";
import isPropValid from "@emotion/is-prop-valid";
import {
  ThemeProvider as StyledThemeProvider,
  StyleSheetManager,
  WebTarget,
} from "styled-components";

function shouldForwardProp(propName: string, target: WebTarget) {
  if (typeof target === "string") {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </StyleSheetManager>
  );
}
