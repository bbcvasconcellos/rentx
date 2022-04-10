import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { AntDesign } from "@expo/vector-icons"; 

import { CarDTO } from "../../dtos/carDtos";
import { useFetch } from "../../hooks/useFetch";

import { Loading } from "../../components/Loading";
import { CarCard } from "../../components/CarCard";
import { BackButton } from "../../components/BackButton";

import { 
  Container, 
  Header, 
  Title, 
  Subtitle, 
  Content, 
  Appointments, 
  AppointmentTitle, 
  AppointmentQuantity,
  CarWrapper, 
  CarFooter, 
  CarFooterTitle, 
  CarFooterDate, 
  CarFooterPeriod
} from "./styles";

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
}

export const MyCars = () => {
  const { data, isLoading } = useFetch<CarProps[]>('/schedules_byuser?user_id=1');
  const navigation = useNavigation<any>();
  const theme = useTheme();  

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <StatusBar 
          translucent
          barStyle='light-content'
          backgroundColor='transparent'
        />
        <BackButton 
          onPress={handleGoBack}
          color={theme.colors.shape}
        />
        <Title>
          Your reservations {'\n'}
          are here
        </Title>
        <Subtitle>
          Comfortable, simple and easy
        </Subtitle>

      </Header>
      <Content>
        <Appointments>
          <AppointmentTitle>Reserved cars</AppointmentTitle>
          <AppointmentQuantity>{data?.length}</AppointmentQuantity>
        </Appointments>
        { isLoading ? 
          <Loading /> : 
          <FlatList 
          data={data}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CarWrapper>
              <CarCard data={item.car} />  
              <CarFooter>
                <CarFooterTitle>Period</CarFooterTitle>
                <CarFooterPeriod>
                  <CarFooterDate>{item.startDate}</CarFooterDate>
                  <AntDesign
                    name='arrowright'
                    size={20}
                    color={theme.colors.title}
                    style={{ marginHorizontal: 10 }}
                  />
                  <CarFooterDate>{item.endDate}</CarFooterDate>
                </CarFooterPeriod>
              </CarFooter>
            </CarWrapper>
          )}
      />  
        }
        
      </Content>
    </Container>
  )
}