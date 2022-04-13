/** @format */

import { sortObjectCollectionByKey } from "./sortObjectCollectionByKey";

describe("sortObjectCollectionByKey", () => {
  it("should sort an array of objects by a string value", () => {
    const arr = [
      { name: "Recipe 2" },
      { name: "Recipe 1" },
      { name: "Recipe 3" },
    ];

    const sortedRecipes = sortObjectCollectionByKey(arr, "name");

    expect(sortedRecipes[0].name).toBe("Recipe 1");
    expect(sortedRecipes[1].name).toBe("Recipe 2");
    expect(sortedRecipes[2].name).toBe("Recipe 3");
  });

  it("should sort an array of objects by a number value", () => {
    const arr = [
      { price: 1.4 },
      { price: 1.2 },
      { price: 4 },
      { price: 2.5 },
      { price: 3.5 },
    ];

    const sortedRecipes = sortObjectCollectionByKey(arr, "price");

    expect(sortedRecipes[0].price).toBe(1.2);
    expect(sortedRecipes[1].price).toBe(1.4);
    expect(sortedRecipes[2].price).toBe(2.5);
    expect(sortedRecipes[3].price).toBe(3.5);
    expect(sortedRecipes[4].price).toBe(4);
  });

  it("should sort an array of objects by a date value", () => {
    const arr = [
      { date: new Date(2020, 1, 1) },
      { date: new Date(2020, 1, 2) },
      { date: new Date(2020, 1, 3) },
      { date: new Date(2020, 1, 4) },
      { date: new Date(2020, 1, 5) },
    ];

    const sortedRecipes = sortObjectCollectionByKey(arr, "date");

    expect(sortedRecipes[0].date).toEqual(new Date(2020, 1, 1));
    expect(sortedRecipes[1].date).toEqual(new Date(2020, 1, 2));
    expect(sortedRecipes[2].date).toEqual(new Date(2020, 1, 3));
    expect(sortedRecipes[3].date).toEqual(new Date(2020, 1, 4));
    expect(sortedRecipes[4].date).toEqual(new Date(2020, 1, 5));
  });

  it("should sort an array of objects by a boolean value", () => {
    const arr = [
      { isVegan: true },
      { isVegan: false },
      { isVegan: true },
      { isVegan: false },
      { isVegan: true },
    ];

    const sortedRecipes = sortObjectCollectionByKey(arr, "isVegan");

    expect(sortedRecipes[0].isVegan).toBe(false);
    expect(sortedRecipes[1].isVegan).toBe(false);
    expect(sortedRecipes[2].isVegan).toBe(true);
    expect(sortedRecipes[3].isVegan).toBe(true);
    expect(sortedRecipes[4].isVegan).toBe(true);
  });

  it("should not sort an array of objects by an object value", () => {
    const arr = [
      { ingredients: { name: "Recipe 2" } },
      { ingredients: { name: "Recipe 1" } },
      { ingredients: { name: "Recipe 3" } },
    ];

    const sortedRecipes = sortObjectCollectionByKey(arr, "ingredients");

    expect(sortedRecipes[0].ingredients.name).toBe("Recipe 2");
    expect(sortedRecipes[1].ingredients.name).toBe("Recipe 1");
    expect(sortedRecipes[2].ingredients.name).toBe("Recipe 3");
  });
});
