import React from 'react';
import {ImageBackground, View} from 'react-native';
import {Title} from 'react-native-paper';

interface Props {
  backgroundImage: string;
  quote: string;
}

export const Quote = ({backgroundImage, quote}: Props) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={{uri: backgroundImage}}
        style={{padding: 20, minHeight: 200}}
        blurRadius={1}
        // imageStyle={{borderRadius: 4}}
      >
        <Title style={{fontFamily: 'Feather'}}>{quote}</Title>
      </ImageBackground>
    </View>
  );
};
