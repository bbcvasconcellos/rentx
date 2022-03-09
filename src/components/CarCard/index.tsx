import React from "react";
import GasolineSvg from "../../assets/gasoline.svg";
import { Container, Details, Brand, Model, About, RentInfo, Period, Price, Type, CarImage } from "./styles";

interface CarProps {
  brand: string;
  model: string;
  rent: {
    period: string,
    price: number
  },
  thumbnail: string;
}

interface CarDataProps {
  data: CarProps
}

export const CarCard = ({ data }: CarDataProps) => {
  return (
    <Container>
        <Details>
          <Brand>{data.brand}</Brand>
          <Model>{data.model}</Model>
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