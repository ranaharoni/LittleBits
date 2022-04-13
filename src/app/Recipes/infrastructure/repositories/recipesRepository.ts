/** @format */

export interface IRecipeResponse {
  id: string;
  calories: string;
  carbos: string;
  description: string;
  difficulty: number;
  fats: string;
  headline: string;
  image: string;
  name: string;
  proteins: string;
  thumb: string;
  time: string;
  country?: string;
}

const API_URL =
  "https://hf-android-app.s3-eu-west-1.amazonaws.com/android-test";

export const getRecipes = async (): Promise<IRecipeResponse[]> => {
  const response = await fetch(`${API_URL}/recipes.json`);
  const data = await response.json();
  return data;
};
