/** @format */

import React from "react";
import { ScrollView } from "react-native";
import { IRecipe } from "../../../app/Recipes/entities/Recipe";
import { GenericLayout } from "../../layouts/GenericLayout";

import { addScreen } from "../../navigation/RootStack";
import { NutritionalFacts } from "./components/NutritionalFacts";
import { RecipeHeader } from "./components/RecipeHeader";
import { Description, PageContent, Label } from "./styles";

const RecipeDetails = (props: any) => {
  const { recipe }: { recipe: IRecipe<string, string> } = props?.route?.params;

  return (
    <GenericLayout>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <RecipeHeader recipe={recipe} />
        <PageContent>
          <Label>Preparation time: {recipe.duration}</Label>
          <Description>{recipe.description}</Description>
          <NutritionalFacts recipe={recipe} />
        </PageContent>
      </ScrollView>
    </GenericLayout>
  );
};

addScreen({
  component: RecipeDetails,
  // TODO: remove the any type once defined in the main navigator
  options: ({ route }: any) => ({ title: route.params.recipe.name }),
});

export default RecipeDetails;
