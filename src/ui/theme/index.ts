/** @format */

import "@emotion/react";
import { Appearance } from "react-native";
import { colors } from "./tokens/colors";
import { spacing } from "./tokens/spacing";

const colorScheme = Appearance.getColorScheme();

const paletteSchemes = {
  light: {
    primary: colors.brand,
    text: colors.gray[900],
    textLighter: colors.gray[800],
    textLight: colors.gray[500],
    background: colors.gray[50],

    altText: colors.white,
    altBackground: colors.brand,
  },
  dark: {
    primary: colors.brand,
    text: colors.stone[100],
    textLighter: colors.stone[200],
    textLight: colors.stone[400],
    background: colors.stone[800],

    altText: colors.white,
    altBackground: colors.brand,
  },
};

export const theme = {
  colorScheme,
  colors,
  spacing,
  paletteSchemes,
  palette: paletteSchemes[colorScheme || "light"],
};

export default theme;

export type CustomTheme = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {
    dummyProp: never;
  }
}
