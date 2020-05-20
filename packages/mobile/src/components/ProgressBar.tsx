import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ProgressBar} from 'react-native-media-player';

export const Progress = () => {
  return (
    <View style={styles.view}>
      <ProgressBar style={styles.bar} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  bar: {
    height: 30,
    width: '100%',
  },
});
