/** @format */

import React from "react";
import { Image, BlurredImage } from "./styles";

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
    <BlurredImage
      blurRadius={10}
      source={{
        uri: src,
      }}
    />
  </>
);
