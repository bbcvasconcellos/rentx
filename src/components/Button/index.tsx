import React from "react";
import { Container, Title } from "./styles";

interface ButtonProps {
  title: string;
  color?: string;
}

export const Button = ({ title, color, ...rest }: ButtonProps) => {
  return (
    <Container 
      color={color} 
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  )
}