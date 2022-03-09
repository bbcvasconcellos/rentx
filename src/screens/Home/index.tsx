import React from "react";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";
import { CarCard } from "../../components/CarCard";

export const Home = () => {
  const carData = {
    brand: 'Pagani',
    model: 'huayra',
    rent: {
      period: '3 days',
      price: 20000
    },
    thumbnail: 'https://www.pngall.com/wp-content/uploads/12/Pagani.png'
  }
  return (
    <Container>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent 
      />
      <Header>
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>XX cars found</TotalCars>
        </HeaderContent>
      </Header>
      <CarList 
        data={[1,2,3]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <CarCard data={carData}/>}
      />
    </Container>
  )
}