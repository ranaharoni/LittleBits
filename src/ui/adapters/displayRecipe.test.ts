/** @format */

import recipes from "../../../__mocks__/recipes";
import { adapter_IRecipeFromIRecipeResponse } from "../../app/Recipes/infrastructure/adapters/adapter_IRecipeFromIRecipeResponse";
import { displayRecipe } from "./displayRecipe";

const snapshot = {
  calories: "397 kcal",
  carbohydrates: "26 g",
  description:
    "Close your eyes, open up your Ras El Hanout and inhale deeply. You are no longer standing in your kitchen. Around you are the sounds of a bustling market. Robed men sell ornate carpets and a camel nibbles affectionately at your ear. OK, we\u2019re pretty sure Paul McKenna\u2019s job is safe for now, but get cooking this recipe and take dinnertime on a magic carpet ride to Casablanca! Our tip for this recipe is to take your meat out of the fridge at least 30 minutes before dinner which will allow you to cook it more evenly.",
  difficulty: 0,
  fats: "5 g",
  headline: "with Spinach and Lemon Couscous",
  id: "53314247ff604d44808b4569",
  image:
    "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314247ff604d44808b4569.jpg",
  name: "Moroccan Skirt Steak",
  proteins: "31 g",
  duration: "30 minutes",
};

describe("displayRecipe", () => {
  it("should correctly serialize a recipe object to a displayable object", () => {
    const recipe = adapter_IRecipeFromIRecipeResponse(recipes[1]);
    const displayableRecipe = displayRecipe(recipe);
    expect(displayableRecipe).toEqual(snapshot);
  });
});
