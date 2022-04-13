/** @format */

import styled, { css } from "@emotion/native";

export const BaseText = styled.Text(({ theme }) => ({
  color: theme.palette.textLighter,
  marginBottom: theme.spacing[3],
}));

export const Title = styled(BaseText)(({ theme }) => ({
  fontSize: 36,
  fontWeight: "800",
}));

export const Content = styled(BaseText)(({ theme }) => ({
  fontSize: 16,
}));

export const Value = styled(BaseText)(({ theme }) => ({
  fontSize: 14,
  fontWeight: "700",
}));

export const Column = styled.View<{ variant: "right" | "left" }>(
  ({ theme, variant }) => ({
    flex: 1,
    width: "10%",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: `flex-${variant == "left" ? "start" : "end"}`,
    paddingHorizontal: theme.spacing[1],
  }),
);

export const Row = styled.View(({ theme }) => ({
  flex: 1,
  flexDirection: "row",
  borderTopWidth: 1,
  borderTopColor: theme.palette.textLighter,
  paddingVertical: theme.spacing[1],
}));

export const Table = styled.View(({ theme }) => ({
  flex: 1,
  paddingHorizontal: theme.spacing[4],
  paddingTop: theme.spacing[2],
  paddingBottom: theme.spacing[4],
  borderWidth: 3,
  borderColor: theme.palette.textLighter,
}));
