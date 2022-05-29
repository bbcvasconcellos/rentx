import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { CarDTO } from "../../dtos/carDtos";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import { 
  Type, 
  About, 
  Brand, 
  Price, 
  Model, 
  Period, 
  Details, 
  CarImage, 
  RentInfo, 
  Container, 
} from "./styles";


interface CarDataProps extends RectButtonProps {
  data: CarDTO;
}

export const CarCard = ({ data,...rest }: CarDataProps) => {
  const MotorType = getAccessoryIcon(data.fuel_type);

  return (
    <Container {...rest}>
        <Details>
          <Brand>{data.brand}</Brand>
          <Model>{data.name}</Model>
          <About>
            <RentInfo>
              <Period>{data.rent?.period}</Period>
              <Price>${data.rent?.price}</Price>
            </RentInfo>
            <Type>
              <MotorType />
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