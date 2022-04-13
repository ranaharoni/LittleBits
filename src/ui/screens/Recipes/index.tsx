/** @format */

import React from "react";
import { useNavigation } from "@react-navigation/core";
import { addScreen } from "../../navigation/RootStack";
import { RecipeCard } from "./components/RecipeCard";

import { useRecipeList } from "./hooks/getRecipes";
import { displayRecipe } from "../../adapters/displayRecipe";
import { SortingMenu } from "./components/SortingMenu";
import { SortingButton } from "./components/SortingButton";
import { GenericLayout } from "../../layouts/GenericLayout";
import { useRecoilValue } from "recoil";
import { selectionState } from "./store/SortingMenu";
import { ScrollView } from "./styles";

const Recipes = () => {
  const sortBy = useRecoilValue(selectionState);
  const navigation = useNavigation();
  const { data } = useRecipeList(sortBy as string);
  return (
    <GenericLayout>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {data?.map((recipe, index) => (
          <RecipeCard
            key={recipe.id}
            order={index + 1}
            recipe={recipe}
            onPress={() =>
              // @ts-ignore that same typing issue from before...
              navigation.navigate("RecipeDetails", {
                recipe: displayRecipe(recipe),
              })
            }
          />
        ))}
      </ScrollView>
      <SortingMenu />
    </GenericLayout>
  );
};

addScreen({
  component: Recipes,
  options: {
    headerRight: SortingButton,
  },
});

export default Recipes;
