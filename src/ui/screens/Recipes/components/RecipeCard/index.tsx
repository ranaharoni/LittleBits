/** @format */

import React, { useRef, useEffect } from "react";
import {
  GestureResponderEvent,
  Pressable,
  Animated,
  Easing,
} from "react-native";
import { IRecipe } from "../../../../../app/Recipes/entities/Recipe";
import { BokehImage } from "../../../../components/BokehImage";
import { ElementHeader } from "../../../../components/ElementHeader";
import { Card, Gradient } from "./styles";

export interface RecipeImageProps {
  src: string;
}

export interface RecipeCardProps {
  order: number;
  recipe: IRecipe;
  onPress?: (event: GestureResponderEvent) => void;
}

export const RecipeCard = ({
  order,
  recipe,
  onPress = () => {},
}: RecipeCardProps) => {
  const animatedVal = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(animatedVal, {
        toValue: 1,
        duration: 400,
        easing: Easing.in(Easing.elastic(0.8)),
        useNativeDriver: true,
      }).start();
    }, 100 * order);
  }, []);

  return (
    <Pressable onPress={onPress}>
      <Card style={{ transform: [{ scale: animatedVal }] }}>
        <BokehImage src={recipe.image} />
        <Gradient
          start={{ x: 0, y: 0.2 }}
          end={{ x: 0, y: 0.8 }}
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,.4)", "rgba(0,0,0,1)"]}
        />

        <ElementHeader
          title={recipe.name}
          headline={recipe.headline}
          variant="cardTitle"
        />
      </Card>
    </Pressable>
  );
};
