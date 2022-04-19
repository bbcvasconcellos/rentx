import React from "react";
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Animated, 
{ 
  Extrapolate, 
  interpolate,
  useSharedValue,
  useAnimatedStyle, 
  useAnimatedScrollHandler
} from "react-native-reanimated";

import { CarDTO } from "../../dtos/carDtos";

import { Button } from "../../components/Button";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import { 
  Rent, 
  About, 
  Brand, 
  Model, 
  Price, 
  Footer, 
  Header, 
  Period, 
  Details, 
  CarImages, 
  Container, 
  Accessories, 
  Description, 
} from "./styles";

import theme from "../../Global/styles/theme";
import { StyleSheet } from "react-native";


interface Params {
  car: CarDTO
}

export const CarDetails = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { car } = route.params as Params;
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;    
  });
  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      )
    }
  })

  const handleGoBack = () => {
    navigation.goBack()
  }

  const handleConfirm = () => {
    navigation.navigate('Schedule', { car })
  }

  const carSliderAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 150],
        [1, 0],
        Extrapolate.CLAMP
      )
    }
  })
  return (
    <Container>
      <StatusBar
        style="dark"
        backgroundColor="transparent"
        translucent 
      />
      <Animated.View
        style={[headerStyleAnimation, styles.header, { backgroundColor: theme.colors.background_secondary}]}
      >
        <Header>
          <BackButton onPress={handleGoBack} />
        </Header>
        
        <Animated.View style={carSliderAnimationStyle}>
          <CarImages>
            <ImageSlider imagesUrl={car.photos}/>
          </CarImages>
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 160,
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
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
          {car.accessories.map((accessory, index) => (
            <Accessory  
              key={index}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
          />
          ))}
          
        </Accessories>
        <About>
          {car.about}
          {car.about}
          {car.about}
          {car.about}
        </About>
        </Animated.ScrollView>
      <Footer>
        <Button  
          title="Choose rental date" 
          onPress={handleConfirm}  
        />
      </Footer>
    </Container>
  )
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    overflow: "hidden",
    zIndex: 1
  }
})