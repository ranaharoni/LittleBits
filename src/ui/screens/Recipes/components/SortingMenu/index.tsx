/** @format */

import React, { useRef, useEffect } from "react";
import { Dimensions, Animated, Easing } from "react-native";
import { useRecoilState } from "recoil";
import { Recipe } from "../../../../../app/Recipes/entities/Recipe";
import { sortingMenuState } from "../../store/SortingMenu";
import { ButtonText, Container, Touchable, Title } from "./styles";

const windowHeight = Dimensions.get("window").height;
const ButtonContainer = Animated.View;

export const SortingMenu = () => {
  const animatedVal = useRef(new Animated.Value(0)).current;
  const [{ isOpen }, setMenuState] = useRecoilState(sortingMenuState);

  useEffect(() => {
    Animated.timing(animatedVal, {
      toValue: isOpen ? 1 : 0,
      duration: 400,
      easing: Easing.elastic(0.5),
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const translateY = animatedVal.interpolate({
    inputRange: [0, 1],
    outputRange: [-windowHeight, 0],
    extrapolate: "clamp",
  });

  const handlePress = (value: string) => {
    setMenuState({
      isOpen: false,
      selected: value,
    });
  };

  return (
    <Container
      style={{
        transform: [{ translateY: translateY }],
      }}>
      <ButtonContainer
        style={{
          transform: [{ scale: animatedVal }],
          opacity: animatedVal,
        }}>
        <Title>SORT BY</Title>
      </ButtonContainer>
      {Recipe.sortableProperties.map((key) => (
        <Touchable
          key={`sort-${key}-button`}
          onPress={() => {
            handlePress(key);
          }}>
          <ButtonContainer
            style={{
              transform: [{ scale: animatedVal }],
              opacity: animatedVal,
            }}>
            <ButtonText>{key}</ButtonText>
          </ButtonContainer>
        </Touchable>
      ))}
    </Container>
  );
};
