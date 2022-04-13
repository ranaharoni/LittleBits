/** @format */

import { ComponentType } from "react";
export interface IScreenObject<T = any> {
  name: string;
  component: ComponentType;
  options?: T;
}

export interface IScreenRegistry {
  [navigatorName: string]: IScreenObject[];
}

const registry: IScreenRegistry = {};

export const addNavigatorScreenClosure =
  (navigatorName: keyof IScreenRegistry) =>
  ({
    component,
    name,
    options,
  }: Omit<IScreenObject, "name"> & Partial<IScreenObject>) => {
    const navigatorScreens = registry[navigatorName];
    const newScreen = {
      name: name || component.name,
      component,
      options,
    };

    if (navigatorScreens) {
      navigatorScreens.push(newScreen);
      return;
    }
    registry[navigatorName] = [newScreen];
  };

export const getNavigatorScreens = (navigatorName: keyof IScreenRegistry) => {
  return registry[navigatorName];
};
