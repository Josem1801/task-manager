"use client";

import { ReactNode } from "react";

import GlobalStyle from "@/ui/global-styles";
import { theme } from "@/ui/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
}
