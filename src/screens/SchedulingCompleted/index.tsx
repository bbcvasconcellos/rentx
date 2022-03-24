import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import { Container, Content, Footer, Message, Title, MessageContainer } from "./styles";
import { ConfirmButton } from "../../components/ConfirmButton";

export const SchedulingCompleted = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<any>();

  const handleCompletedReservation = () => {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <StatusBar 
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      <LogoSvg width={width}/>
      <Content>
        <DoneSvg 
          width={80}
          height={80}  
        />
        <MessageContainer>
          <Title>Car reserved!</Title>
          <Message>
            You can pick your car up {'\n'}
            on your selected date {'\n'}
            at a Rentx dealer
          </Message>
        </MessageContainer>
      </Content>
      <Footer>
        <ConfirmButton 
          title='ok'
          onPress={handleCompletedReservation}  
        />
      </Footer>
    </Container>
  )
}