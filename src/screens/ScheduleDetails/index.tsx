import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from "date-fns";

import api from "../../services/api";

import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Button } from "../../components/Button";

import { CarDTO } from "../../dtos/carDtos";

import { getPlatformDate } from "../../utils/getPlatformDate";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import { 
  Accessories, 
  Brand, 
  CalendarIcon, 
  CarImages, 
  Container, 
  Content, 
  DateInfo, 
  DateTitle, 
  DateValue, 
  Description, 
  Details, 
  Footer, 
  Header, 
  Model, 
  Period, 
  Price, 
  Rent, 
  RentalPeriod,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal
} from "./styles";


interface Params {
  car: CarDTO;
  dates: string[]; 
};

interface RentalPeriodProps {
  startDate: string;
  endDate: string;
}

export const ScheduleDetails = () => {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { car, dates } = route.params as Params;
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>({} as RentalPeriodProps);

  console.log(car)

  const handleConfirmDate = async() => {
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

    //validate whether a date can be validated or not (challenge)

    const unavailableDates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    await api.post(`/schedules_byuser/`, {
      user_id: 1,
      car,
      startDate: format(getPlatformDate(new Date(dates[0])), 'MM/dd/yyyy'),
      endDate: format(getPlatformDate(new Date(dates[dates.length - 1])), 'MM/dd/yyyy')
    })

    await api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates: unavailableDates
    })
    .then(() => navigation.navigate('SchedulingCompleted'))
    .catch(() => Alert.alert('Could not confirm payment'))
    
  }

  const handleGoBack = () => {
    navigation.goBack();
  }

  const amountDue = () => {
    const checkout = Number(dates.length * car.rent.price);
    const formatCheckout = checkout.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    return formatCheckout
  }

  useEffect(() => {
    setRentalPeriod({
      startDate: format(getPlatformDate(new Date(dates[0])), 'MM/dd/yyyy'),
      endDate: format(getPlatformDate(new Date(dates[dates.length - 1])), 'MM/dd/yyyy')
    })
  }, [])

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={car.photos}/>
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Model>{car.name}</Model>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>${car.rent.price}</Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map((accessory, index) => 
            <Accessory 
              key={index}
              name={accessory.name} 
              icon={getAccessoryIcon(accessory.type)}
            />
          )}
        </Accessories>
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>From</DateTitle>
            <DateValue>{rentalPeriod.startDate}</DateValue>
          </DateInfo>
          <Feather 
            name='chevron-right'
            size={RFValue(10)}
            color={theme.colors.text}
          />
          <DateInfo>
            <DateTitle>To</DateTitle>
            <DateValue>{rentalPeriod.endDate}</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`${dates.length} x $${car.rent.price} ${car.rent.period}`}</RentalPriceQuota>
            <RentalPriceTotal>${amountDue()}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button 
          title="Rent now" 
          color={theme.colors.success}
          onPress={handleConfirmDate} 
        />
      </Footer>
    </Container>
  )
}