/** @format */

import styled from "@emotion/native";

export const Description = styled.Text(({ theme }) => ({
  paddingBottom: theme.spacing[5],
  color: theme.palette.textLight,
  lineHeight: 19,
}));

export const Label = styled.Text(({ theme }) => ({
  color: theme.colors.slate[700],
  backgroundColor: theme.colors.slate[300],
  alignSelf: "flex-start",
  paddingHorizontal: theme.spacing[1],
  paddingVertical: theme.spacing[1] / 2,
  borderRadius: 10,
  marginBottom: theme.spacing[1],
  position: "relative",
  top: -theme.spacing[2] / 2,
}));

export const PageContent = styled.View(({ theme }) => ({
  padding: theme.spacing[4],
  paddingTop: 0,
}));
