import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, 
{ 
  runOnJS,
  withTiming, 
  interpolate, 
  Extrapolate, 
  useSharedValue, 
  useAnimatedStyle, 
} from "react-native-reanimated";

import BrandSvg from "../../assets/brand.svg";
import LogoSvg from "../../assets/logo.svg";

import { Container } from "./styles";


export const Splash = () => {
  const dimension = Dimensions.get('window').width;
  const navigation = useNavigation<any>();
  const splashAnimation = useSharedValue(0);
  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value,
        [0, 25, 30, 50], 
        [1, 0.3, 0, 0],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          translateX: interpolate(splashAnimation.value, [0, 30], [0, -dimension])
        }
      ]
    }
  });
  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value,
        [0, 25, 30, 50],
        [0, 0, 0.3, 1],
        Extrapolate.CLAMP 
      ),
      transform: [
        {
          translateX: interpolate(splashAnimation.value, [0, 50], [-dimension, 0])
        }
      ]
    }
  });

  useEffect(() => {
    splashAnimation.value = withTiming(50, {
      duration: 1800
    }, 
      () => {
        'worklet';
        runOnJS(startApp)();
      }
    )
  }, []);

  const startApp = () => {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: 'absolute' }]}>
        <BrandSvg 
          width={80} 
          height={50}
        />
      </Animated.View>
      <Animated.View style={[logoStyle, { position: 'absolute' }]}>
        <LogoSvg 
          width={180}
          height={20}
        />
      </Animated.View>
    </Container>
  )
}
