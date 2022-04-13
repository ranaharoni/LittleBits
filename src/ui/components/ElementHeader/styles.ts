/** @format */

import styled from "@emotion/native";

export type HeaderVariantOptions = "pageTitle" | "cardTitle";

export const Title = styled.Text<{ variant: HeaderVariantOptions }>(
  ({ theme, variant }) => {
    const isCardTitle = variant === "cardTitle";

    return {
      fontSize: 17,
      fontWeight: "600",
      color: isCardTitle ? theme.colors.white : theme.palette.textLighter,
      marginBottom: theme.spacing[0.25],
      textShadowColor: (isCardTitle && "rgba(0, 0, 0, 0.75)") || undefined,
      textShadowOffset: (isCardTitle && { width: 1, height: 3 }) || undefined,
      textShadowRadius: (isCardTitle && 8) || undefined,
    };
  },
);

export const Headline = styled(Title)<{ variant: HeaderVariantOptions }>(
  () => ({
    fontSize: 11,
    marginBottom: 0,
  }),
);

export const Container = styled.View<{ variant: HeaderVariantOptions }>(
  ({ theme, variant }) => {
    const isCardTitle = variant === "cardTitle";

    return {
      flex: 1,
      alignSelf: isCardTitle ? "flex-end" : "flex-start",
      paddingHorizontal: theme.spacing[isCardTitle ? 5 : 4],
      paddingVertical: theme.spacing[4],
    };
  },
);
