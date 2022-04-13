/** @format */

import { Recipe } from "../entities/Recipe";
import { adapter_IRecipeFromIRecipeResponse } from "../infrastructure/adapters/adapter_IRecipeFromIRecipeResponse";
import { getRecipes } from "../infrastructure/repositories/recipesRepository";
import { sortObjectCollectionByKey } from "../infrastructure/utils/sortObjectCollectionByKey";

export const displaySortedRecipes = async (property?: string) => {
  try {
    const data = (await getRecipes()).map(adapter_IRecipeFromIRecipeResponse);
    if (property) {
      return sortObjectCollectionByKey(data, property as keyof Recipe);
    }
    return data;
  } catch (error) {
    // TODO: handle error
    console.error(error);
    throw error; // this is going to get caught by the useSWR hook
  }
};
