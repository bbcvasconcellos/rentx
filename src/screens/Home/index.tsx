import React from "react";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from '@react-navigation/native';

import { CarCard } from "../../components/CarCard";
import { Loading } from "../../components/Loading";

import { useFetch } from "../../hooks/useFetch";
import { CarDTO } from "../../dtos/carDtos";

import Logo from "../../assets/logo.svg";
import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";


export const Home = () => {
  const navigation = useNavigation<any>();
  const { data, isLoading } = useFetch('/cars')

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
      { isLoading ? 
        <Loading /> : 
        <CarList 
        data={data as CarDTO}
        keyExtractor={(item: CarDTO) => String(item.id)}
        renderItem={({ item }) => <CarCard data={item} onPress={handleCarDetails}/>}
      />
      }
      
    </Container>
  )
}