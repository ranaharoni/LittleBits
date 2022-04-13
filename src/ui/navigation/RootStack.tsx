/** @format */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Providers from "../providers";
import {
  getNavigatorScreens,
  IScreenObject,
  addNavigatorScreenClosure,
} from "./ScreenRegistry";
import theme from "../theme";

export type RootStackParams = {
  RecipeDetails: {};
};

const { Navigator, Screen } = createNativeStackNavigator<
  RootStackParams | any
>();

// The name of this stack
const navigatorName = "RootStack";

// A screen mapper for this stack
const screensMapper = (screen: IScreenObject) => {
  return (
    <Screen
      key={`${navigatorName}-${screen.name}`}
      name={screen.name}
      component={screen.component}
      options={screen.options}
    />
  );
};

// This function is to be imported by every screen that should be in this navigation stack
export const addScreen = addNavigatorScreenClosure(navigatorName);

// This is where the stack renders
export const RootStack = () => {
  return (
    <Providers>
      <Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.palette.primary,
          },
          headerTintColor: theme.colors.white,
        }}>
        {getNavigatorScreens(navigatorName).map(screensMapper)}
      </Navigator>
    </Providers>
  );
};
