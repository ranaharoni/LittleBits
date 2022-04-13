/** @format */

import React from "react";
import { Recipe, IRecipe } from "../../../../../app/Recipes/entities/Recipe";
import { Table, Row, Column, Content, Value, Title } from "./styles";

export interface NutritionalFactsProps {
  recipe: IRecipe<string, string>;
}

export const NutritionalFacts = ({ recipe }: NutritionalFactsProps) => {
  return (
    <Table>
      <Title>Nutrition Facts</Title>
      {Object.keys(Recipe.units).map((key: string) => (
        <Row key={`recipe-${recipe?.id}-${key}`}>
          <Column variant="left">
            <Content>{key}</Content>
          </Column>
          <Column variant="right">
            <Value>{recipe[key as keyof Recipe]}</Value>
          </Column>
        </Row>
      ))}
    </Table>
  );
};
