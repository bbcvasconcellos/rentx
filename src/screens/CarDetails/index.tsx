import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { CarImages, Container, Header } from "./styles";

export const CarDetails = () => {
  return (
    <Container>
      <Header>
        <BackButton onPress={() =>{}} />
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={['https://www.pngall.com/wp-content/uploads/12/Pagani.png']}/>
      </CarImages>
    </Container>
  )
}