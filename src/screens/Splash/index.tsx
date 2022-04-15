import React from "react";
import { StatusBar } from "react-native";

import { Container } from "./styles";

export const Splash = () => {
  return (
    <Container>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
    </Container>
  )
}