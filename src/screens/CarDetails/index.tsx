import React from "react";
import { useNavigation } from '@react-navigation/native';

import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Button } from "../../components/Button";

import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";

import { 
  About, 
  Accessories, 
  Brand, 
  CarImages, 
  Container, 
  Content, 
  Description, 
  Details, 
  Footer, 
  Header, 
  Model, 
  Period, 
  Price, 
  Rent 
} from "./styles";


export const CarDetails = () => {
  const navigation = useNavigation<any>();

  const handleGoBack = () => {
    navigation.goBack()
  }

  const handleConfirm = () => {
    navigation.navigate('Schedule')
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={['https://www.pngall.com/wp-content/uploads/12/Pagani.png']}/>
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Pagani</Brand>
            <Model>Huayra</Model>
          </Description>
          <Rent>
            <Period>Daily</Period>
            <Price>$1500</Price>
          </Rent>
        </Details>
        <Accessories>
          <Accessory  
            name="380km/h"
            icon={speedSvg}
          />
          <Accessory  
            name="3s"
            icon={accelerationSvg}
          />
          <Accessory  
            name="800 HP"
            icon={forceSvg}
          />
          <Accessory  
            name="gasoline"
            icon={gasolineSvg}
          />
          <Accessory  
            name="auto"
            icon={exchangeSvg}
          />
          <Accessory  
            name="2"
            icon={peopleSvg}
          />
        </Accessories>
        <About>
          Este é automóvel desportivo. 
          Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. 
          É um belíssimo carro para quem gosta de acelerar
        </About>
      </Content>
      <Footer>
        <Button  
          title="Choose rental date" 
          onPress={handleConfirm}  
        />
      </Footer>
    </Container>
  )
}