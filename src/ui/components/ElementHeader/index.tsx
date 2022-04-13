/** @format */

import React from "react";
import { Title, Headline, Container, HeaderVariantOptions } from "./styles";

export interface ElementHeaderProps {
  title: string;
  headline?: string;
  variant?: HeaderVariantOptions;
}

export const ElementHeader = ({
  title,
  headline,
  variant = "pageTitle",
}: ElementHeaderProps) => (
  <Container variant={variant}>
    <Title variant={variant}>{title}</Title>
    {headline && <Headline variant={variant}>{headline}</Headline>}
  </Container>
);
