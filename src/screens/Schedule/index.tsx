import React from "react";
import { useTheme } from "styled-components";
import { useNavigation } from '@react-navigation/native';

import { BackButton } from "../../components/BackButton";
import { Calendar } from "../../components/Calendar";

import ArrowSvg from "../../assets/arrow.svg";
import { Container, Content, DateInfo, DateTitle, DateValue, Footer, Header, RentalPeriod, Title, UnderlineDateValue } from "./styles";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";

export const Schedule = () => {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleConfirmPeriod = () => {
    navigation.navigate('ScheduleDetails')
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
            <DateValue></DateValue>
            <UnderlineDateValue selected={false} />
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>To</DateTitle>
            <DateValue></DateValue>
            <UnderlineDateValue selected={false} />
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar />
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
