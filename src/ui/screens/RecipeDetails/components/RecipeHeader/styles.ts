/** @format */

import styled from "@emotion/native";

export const ImageContainer = styled.View(({ theme }) => ({
  flex: 1,
  height: 200,
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
