/** @format */

import { adapter_IRecipeFromIRecipeResponse } from "./adapter_IRecipeFromIRecipeResponse";
import recipes from "../../../../../__mocks__/recipes";

const snapshot = {
  id: "533143aaff604d567f8b4571",
  calories: 516,
  carbohydrates: 47,
  description:
    "There\u2019s nothing like the simple things in life - the smell of freshly cut grass, sitting outside on a nice sunny day, spending time with friends and family. Well here is a recipe that delivers simple culinary pleasures - some nice fresh fish with a crispy crust, crunchy potato wedges and some delightfully sweet sugar snap peas flavoured with cooling mint. Slip into something comfortable and relax into a delicious dinner!",
  difficulty: 0,
  fats: 8,
  headline: "with Sweet Potato Wedges and Minted Snap Peas",
  image:
    "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/533143aaff604d567f8b4571.jpg",
  name: "Crispy Fish Goujons",
  proteins: 43,
  duration: new Date(new Date().getTime() + 35 * 60 * 1000),
};

describe("adapter_IRecipeFromIRecipeResponse", () => {
  test("should correctly adapt IRecipeResponse to IRecipe", () => {
    const recipeResponse = recipes[0];
    const recipe = adapter_IRecipeFromIRecipeResponse(recipeResponse);

    expect(recipe.id).toBe(snapshot.id);
    expect(recipe.calories).toBe(snapshot.calories);
    expect(recipe.carbohydrates).toBe(snapshot.carbohydrates);
    expect(recipe.description).toBe(snapshot.description);
    expect(recipe.difficulty).toBe(snapshot.difficulty);
    expect(recipe.fats).toBe(snapshot.fats);
    expect(recipe.headline).toBe(snapshot.headline);
    expect(recipe.image).toBe(snapshot.image);
    expect(recipe.name).toBe(snapshot.name);
    expect(recipe.proteins).toBe(snapshot.proteins);
  });

  // should set 0 as default value for calories, carbohydrates, proteins and fats
  test("should set 0 as default value for calories, carbohydrates, proteins and fats", () => {
    const recipeResponse = recipes[6];
    const recipe = adapter_IRecipeFromIRecipeResponse(recipeResponse);

    expect(recipe.calories).toBe(0);
    expect(recipe.carbohydrates).toBe(0);
    expect(recipe.proteins).toBe(0);
    expect(recipe.fats).toBe(0);
  });
});
