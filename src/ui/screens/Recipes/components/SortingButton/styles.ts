/** @format */

import styled from "@emotion/native";

export const Container = styled.View();

export const Text = styled.Text<{ bold?: boolean }>(({ theme, bold }) => ({
  color: theme.palette.altText,
  fontWeight: bold ? "700" : "500",
}));
