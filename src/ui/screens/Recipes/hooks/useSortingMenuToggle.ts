/** @format */

import { useRecoilState } from "recoil";
import { openState } from "../store/SortingMenu";

export const useSortingMenuToggle = () => {
  const [isOpen, setOpenState] = useRecoilState(openState);
  return () => {
    setOpenState(!isOpen);
  };
};
