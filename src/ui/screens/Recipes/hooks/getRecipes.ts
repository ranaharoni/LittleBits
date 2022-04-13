/** @format */

import useSWR from "swr";
import { displaySortedRecipes } from "../../../../app/Recipes/useCases/displaySortedRecipes";

export const useRecipeList = (property?: string) => {
  const { data, error } = useSWR([property, "recipes"], displaySortedRecipes);
  return {
    isLoading: !data && !error,
    error,
    data,
  };
};
