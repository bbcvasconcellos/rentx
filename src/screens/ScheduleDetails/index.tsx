import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
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



export const ScheduleDetails = () => {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  const handleConfirmDate = () => {
    navigation.navigate('SchedulingCompleted');
  }

  const handleGoBack = () => {
    navigation.goBack();
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
            <DateValue>03/21/2022</DateValue>
          </DateInfo>
          <Feather 
            name='chevron-right'
            size={RFValue(10)}
            color={theme.colors.text}
          />
          <DateInfo>
            <DateTitle>To</DateTitle>
            <DateValue>03/29/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>5 x $1500 daily</RentalPriceQuota>
            <RentalPriceTotal>$7500</RentalPriceTotal>
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