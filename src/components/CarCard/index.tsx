import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { CarDTO } from "../../dtos/carDtos";

import GasolineSvg from "../../assets/gasoline.svg";
import { Container, Details, Brand, Model, About, RentInfo, Period, Price, Type, CarImage } from "./styles";



interface CarDataProps extends RectButtonProps{
  data: CarDTO;
}

export const CarCard = ({ data, ...rest }: CarDataProps) => {
  return (
    <Container {...rest}>
        <Details>
          <Brand>{data.brand}</Brand>
          <Model>{data.name}</Model>
          <About>
            <RentInfo>
              <Period>{data.rent.period}</Period>
              <Price>{data.rent.price}</Price>
            </RentInfo>
            <Type>
              <GasolineSvg />
            </Type>
          </About>
        </Details>
        <CarImage  
          source={{ uri: data.thumbnail }}
          resizeMode="contain"  
        />
    </Container>
  )
}