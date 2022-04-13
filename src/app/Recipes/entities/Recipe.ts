/** @format */

export interface IRecipe<Units = number, Duration = Date> {
  id: string;
  image: string;
  name: string;
  headline: string;
  description: string;
  difficulty: number;
  calories: Units;
  carbohydrates: Units;
  fats: Units;
  proteins: Units;
  duration: Duration;
}

export class Recipe implements IRecipe<number, Date> {
  id: string;
  image: string;
  name: string;
  headline: string;
  description: string;
  difficulty: number;
  calories: number;
  carbohydrates: number;
  fats: number;
  proteins: number;
  duration: Date;

  static units = {
    calories: "kcal",
    carbohydrates: "g",
    proteins: "g",
    fats: "g",
  };

  static sortableProperties = [
    "name",
    "headline",
    "description",
    "difficulty",
    "calories",
    "carbohydrates",
    "fats",
    "proteins",
    "duration",
  ];

  constructor(recipe: IRecipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.name = recipe.name;
    this.headline = recipe.headline;
    this.description = recipe.description;
    this.difficulty = recipe.difficulty;
    this.calories = recipe.calories;
    this.carbohydrates = recipe.carbohydrates;
    this.fats = recipe.fats;
    this.proteins = recipe.proteins;
    this.duration = recipe.duration;
  }
}
