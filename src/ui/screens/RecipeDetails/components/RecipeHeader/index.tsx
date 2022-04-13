/** @format */

import React from "react";
import { View } from "react-native";
import { BokehImage } from "../../../../components/BokehImage";
import { ElementHeader } from "../../../../components/ElementHeader";
import { ImageContainer } from "./styles";

export const RecipeHeader = ({ recipe }: any) => {
  return (
    <View>
      <ImageContainer>
        <BokehImage src={recipe.image} />
      </ImageContainer>
      <ElementHeader title={recipe.name} headline={recipe.headline} />
    </View>
  );
};
