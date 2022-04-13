/** @format */

import React from "react";
import { Image } from "./styles";

export interface BokehImageProps {
  src: string;
}

export const BokehImage = ({ src }: BokehImageProps) => (
  <>
    <Image
      source={{
        uri: src,
      }}
    />
    <Image
      blurRadius={10}
      source={{
        uri: src,
      }}
      style={{ opacity: 0.3 }}
    />
  </>
);
