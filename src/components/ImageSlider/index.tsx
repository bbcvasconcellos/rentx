import React, { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";

import { 
  CarImage, 
  Container, 
  ImageIndex, 
  ImageIndexes,
  CarImageWrapper, 
} from "./styles";

interface ImageProps {
  imagesUrl: string[]
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export const ImageSlider = ({ imagesUrl }: ImageProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const imageIndexChange = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  })

  return (
    <Container>
    <ImageIndexes>
      {
        imagesUrl.map((_, index) => (
          <ImageIndex 
            active={imageIndex === index} 
            key={index}
          />
        ))
      }
      
    </ImageIndexes>
    
      <FlatList 
        data={imagesUrl}
        keyExtractor={key => key}
        renderItem={({ item }) => 
          <CarImageWrapper>
            <CarImage 
              source={{ uri: item }}
              resizeMode="contain"
            />
          </CarImageWrapper>
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={imageIndexChange.current}
      />
      
    
    </Container>
  )
}