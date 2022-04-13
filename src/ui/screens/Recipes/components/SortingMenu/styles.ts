/** @format */

import styled from "@emotion/native";
import { Animated } from "react-native";

export const Container = styled(Animated.View)(({ theme }) => ({
  flex: 1,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  position: "absolute",
  backgroundColor: theme.palette.altBackground,
  alignItems: "center",
  justifyContent: "center",
}));

export const Touchable = styled.TouchableOpacity(({ theme }) => ({
  paddingBottom: theme.spacing[4],
}));

export const ButtonText = styled.Text(({ theme }) => ({
  color: theme.palette.altText,
  fontSize: 20,
  fontWeight: "300",
}));

export const Title = styled(ButtonText)(({ theme }) => ({
  fontSize: 24,
  fontWeight: "400",
  paddingBottom: theme.spacing[3],
}));
