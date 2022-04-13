/** @format */

import React, { ReactNode } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "./ThemeProvider";

const Providers = ({ children }: { children: ReactNode }) => (
  <RecoilRoot>
    <ThemeProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeProvider>
  </RecoilRoot>
);

export default Providers;
