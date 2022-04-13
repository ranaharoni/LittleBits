/** @format */

import { formatDistance } from "date-fns";
import { Recipe, IRecipe } from "../../app/Recipes/entities/Recipe";

export const displayRecipe = (recipe: Recipe): IRecipe<string, string> => {
  return {
    id: recipe.id,
    image: recipe.image,
    name: recipe.name,
    headline: recipe.headline,
    description: recipe.description,
    difficulty: recipe.difficulty,
    calories: `${recipe.calories} ${Recipe.units.calories}`,
    carbohydrates: `${recipe.carbohydrates} ${Recipe.units.carbohydrates}`,
    fats: `${recipe.fats} ${Recipe.units.fats}`,
    proteins: `${recipe.proteins} ${Recipe.units.proteins}`,
    duration: formatDistance(recipe.duration, new Date(), { addSuffix: false }),
  };
};
