import React from 'react';

// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'react-native-paper';

export interface ThemedIconProps {
  name: string;
  size: number;
}

export const ThemedIcon = ({name, size}: ThemedIconProps) => {
  const theme = useTheme();
  const {colors} = theme;
  return <Icon name={name} color={colors.text} size={size} />;
};
