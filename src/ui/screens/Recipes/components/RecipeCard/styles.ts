/** @format */

import styled from "@emotion/native";
import { Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";



export const Card = styled(Animated.View)(({ theme }) => ({
  backgroundColor: theme.colors.white,
  flex: 1,
  height: 200,
  margin: theme.spacing[3],
  borderRadius: 10,
  flexDirection: "row",
  overflow: "hidden",
  shadowColor: "#000A",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,
  elevation: 6,
  position: "relative",
}));

export const Gradient = styled(LinearGradient)(({}) => ({
  flex: 1,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%",
  position: "absolute",
  opacity: 0.7,
}));
