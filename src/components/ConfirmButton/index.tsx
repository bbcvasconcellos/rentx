import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface ConfirmButtonProps extends RectButtonProps{
  title: string;
  color?: string;
}

export const ConfirmButton = ({ title, color, ...rest }: ConfirmButtonProps) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}