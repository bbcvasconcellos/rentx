import React, { useState } from "react";
import { Alert, StatusBar } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from "date-fns";
import { CalendarProps } from "react-native-calendars";
import { useTheme } from "styled-components";

import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import { Calendar, DayProps, generateInterval } from "../../components/Calendar";

import { getPlatformDate } from "../../utils/getPlatformDate";
import { CarDTO } from "../../dtos/carDtos";

import ArrowSvg from "../../assets/arrow.svg";

import { 
  Container, 
  Content, 
  DateInfo, 
  DateTitle, 
  DateValue,
  Footer, 
  Header, 
  RentalPeriod, 
  Title, 
  UnderlineDateValue 
} from "./styles";

interface RentalPeriod {
  startDateFormated: string;
  endDateFormated: string;
}

interface Params {
  car: CarDTO
}

export const Schedule = () => {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { car } = route.params as Params

  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<any>({} as CalendarProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleConfirmPeriod = () => {
    if(!rentalPeriod.startDateFormated || !rentalPeriod.endDateFormated) {
      Alert.alert('Please select a rental date range');
    } else {
      navigation.navigate('ScheduleDetails', { 
        dates: Object.keys(markedDates),
        car
      });
    }
  }

  const handleChangeDate = (date: DayProps) => {
    let startDate = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let endDate = date;

    if(startDate.timestamp > endDate.timestamp) {
      startDate = endDate;
      endDate = startDate;
    }

    setLastSelectedDate(endDate);

    const interval = generateInterval(startDate, endDate);    
    setMarkedDates(interval);
    
    const initialDate = Object.keys(interval)[0];    
    const finalDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startDateFormated: format(getPlatformDate(new Date(initialDate)), 'MM/dd/yyyy'),
      endDateFormated: format(getPlatformDate(new Date(finalDate)), 'MM/dd/yyyy'),
    })
  }  

  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton 
          onPress={handleGoBack} 
          color={theme.colors.shape}
        />
        <Title>
          Select the {'\n'}
          rental {'\n'}
          date range
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>From</DateTitle>
            <DateValue>{rentalPeriod.startDateFormated}</DateValue>
            <UnderlineDateValue selected={!!rentalPeriod.startDateFormated} />
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>To</DateTitle>
            <DateValue>{rentalPeriod.endDateFormated}</DateValue>
            <UnderlineDateValue selected={!!rentalPeriod.endDateFormated} />
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Content>
      <Footer>
        <Button 
          title="Confirm"
          onPress={handleConfirmPeriod}
        />
      </Footer>
    </Container>
  )
}
