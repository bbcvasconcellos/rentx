import React from "react";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from '@react-navigation/native';

import Logo from "../../assets/logo.svg";
import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";
import { CarCard } from "../../components/CarCard";

export const Home = () => {
  const navigation = useNavigation<any>();

  const carData = {
    brand: 'Pagani',
    model: 'huayra',
    rent: {
      period: '3 days',
      price: 20000
    },
    thumbnail: 'https://www.pngall.com/wp-content/uploads/12/Pagani.png'
  }

  const handleCarDetails = () => {
    navigation.navigate('CarDetails');
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
        renderItem={({ item }) => <CarCard data={carData} onPress={handleCarDetails}/>}
      />
    </Container>
  )
}