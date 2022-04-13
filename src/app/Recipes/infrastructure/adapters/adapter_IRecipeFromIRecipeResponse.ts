/** @format */

import { Recipe } from "../../entities/Recipe";
import { IRecipeResponse } from "../repositories/recipesRepository";
import { durationToFutureDate } from "../utils/durationToFutureDate";

export const adapter_IRecipeFromIRecipeResponse = ({
  id,
  calories,
  carbos,
  description,
  difficulty,
  fats,
  headline,
  image,
  name,
  proteins,
  time,
}: IRecipeResponse): Recipe =>
  new Recipe({
    id: id.trim(),
    image: image.trim(),
    name: name.replace(/\s+/g, " ").trim(),
    headline: headline.replace(/\s+/g, " ").trim(),
    description: description.replace(/\s+/g, " ").trim(),
    difficulty,
    calories: parseFloat(calories.trim()) || 0,
    carbohydrates: parseFloat(carbos.trim()) || 0,
    fats: parseFloat(fats.trim()) || 0,
    proteins: parseFloat(proteins.trim()) || 0,
    duration: durationToFutureDate(time.trim()),
  });
