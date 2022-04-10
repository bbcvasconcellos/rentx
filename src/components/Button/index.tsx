import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  enabled?: boolean;
  color?: string;
}

export const Button = ({ title, color, enabled = true, ...rest }: ButtonProps) => {
  return (
    <Container 
      color={color} 
      enabled={enabled}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  )
}