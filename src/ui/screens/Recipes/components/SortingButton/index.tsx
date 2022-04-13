/** @format */

import React from "react";
import { TouchableOpacity } from "react-native";
import { useRecoilValue } from "recoil";
import { Text, Container } from "./styles";
import { selectionState } from "../../store/SortingMenu";
import { useSortingMenuToggle } from "../../hooks/useSortingMenuToggle";

export const SortingButton = () => {
  const selection = useRecoilValue(selectionState);
  const toggle = useSortingMenuToggle();
  return (
    <TouchableOpacity
      hitSlop={{ top: 50, right: 50, bottom: 50, left: 50 }}
      onPress={() => {
        toggle();
      }}>
      <Container>
        {!selection ? (
          <Text>Sort</Text>
        ) : (
          <Text>
            sorted by: <Text bold>{selection as string}</Text>
          </Text>
        )}
      </Container>
    </TouchableOpacity>
  );
};
