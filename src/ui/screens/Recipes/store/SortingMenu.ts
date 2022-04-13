/** @format */

import { atom, selector } from "recoil";

export const sortingMenuState = atom({
  key: "SortingMenuState",
  default: {
    isOpen: false,
    selected: "",
  },
});

export const openState = selector({
  key: "sortingMenuOpenState",
  get: ({ get }) => {
    return get(sortingMenuState).isOpen;
  },
  set: ({ set, get }, isOpen) => {
    const state = get(sortingMenuState);
    set(sortingMenuState, {
      isOpen: isOpen as boolean,
      selected: state.selected,
    });
  },
});

export const selectionState = selector({
  key: "sortingMenuSelectionState",
  get: ({ get }) => {
    return get(sortingMenuState).selected;
  },
  set: ({ set, get }, value) => {
    const state = get(sortingMenuState);
    set(sortingMenuState, {
      isOpen: state.isOpen,
      selected: value as string,
    });
  },
});
