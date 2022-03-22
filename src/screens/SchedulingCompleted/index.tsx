import React from "react";
import { useWindowDimensions } from "react-native";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import { Container, Content, Footer, Message, Title } from "./styles";
import { ConfirmButton } from "../../components/ConfirmButton";

export const SchedulingCompleted = () => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <LogoSvg width={width}/>
      <Content>
        <DoneSvg 
          width={80}
          height={80}  
        />
        <Title>Car reserved!</Title>
        <Message>
          You can pick your car up {'\n'}
          on your selected date {'\n'}
          at a Rentx dealer
        </Message>
      </Content>
      <Footer>
        <ConfirmButton title='ok'/>
      </Footer>
    </Container>
  )
}