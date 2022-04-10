import React from "react";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from "styled-components";

import { CarCard } from "../../components/CarCard";
import { Loading } from "../../components/Loading";

import { useFetch } from "../../hooks/useFetch";
import { CarDTO } from "../../dtos/carDtos";

import Logo from "../../assets/logo.svg";
import { CarList, Container, Header, HeaderContent, MyCarsButton, TotalCars } from "./styles";


export const Home = () => {
  const navigation = useNavigation<any>();
  const { data, isLoading } = useFetch<CarDTO[]>('/cars');
  const theme = useTheme();

  const handleCarDetails = (car: CarDTO) => {
    navigation.navigate('CarDetails', { car });
  }

  const handleOpenMyCars = () => {
    navigation.navigate('MyCars');
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
          <TotalCars>{data?.length} cars found</TotalCars>
        </HeaderContent>
      </Header>
      { isLoading ? 
        <Loading /> : 
        <CarList 
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
              <CarCard data={item} onPress={() => handleCarDetails(item)}/>  
          )}
      />
      }
      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons 
          name='ios-car-sport' 
          size={32}  
          color={theme.colors.shape}
        />
      </MyCarsButton>
    </Container>
  )
}