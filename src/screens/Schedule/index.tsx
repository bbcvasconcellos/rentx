import React from "react";
import { useTheme } from "styled-components";

import { BackButton } from "../../components/BackButton";
import { Calendar } from "../../components/Calendar";

import ArrowSvg from "../../assets/arrow.svg";
import { Container, Content, DateInfo, DateTitle, DateValue, Footer, Header, RentalPeriod, Title, UnderlineDateValue } from "./styles";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";

export const Schedule = () => {
  const theme = useTheme();
  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton 
          onPress={() => {}} 
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
        />
      </Footer>
    </Container>
  )
}
