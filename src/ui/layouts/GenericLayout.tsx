/** @format */

import React, { ReactNode } from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";

import theme from "../theme";

export interface GenericLayoutProps {
  children: ReactNode;
}

export const GenericLayout = ({ children }: GenericLayoutProps) => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: theme.palette.background,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      {children}
    </SafeAreaView>
  );
};
