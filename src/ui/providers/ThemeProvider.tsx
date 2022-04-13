/** @format */

import React from "react";
import {
  ThemeProvider as EmotionThemeProvider,
  ThemeProviderProps as EmotionThemeProviderProps,
} from "@emotion/react";
import defaultTheme from "../theme";

export type ThemeProviderProps = Omit<EmotionThemeProviderProps, "theme"> &
  Partial<EmotionThemeProviderProps>;

export const ThemeProvider = ({
  children,
  theme = defaultTheme,
}: ThemeProviderProps) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
