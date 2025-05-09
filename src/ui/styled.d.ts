import "styled-components";

import { theme } from "./theme";

// use theme to extend the default theme types
type ThemeType = typeof theme;
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {
    _brand?: "styled-components";
  }
}
