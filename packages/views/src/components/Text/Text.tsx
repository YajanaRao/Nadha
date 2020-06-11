import React, { ReactNode } from "react";
import { Text as BareText, TextStyle, StyleProp } from "react-native";
import { useTheme } from "emotion-theming";
import { Theme } from "../../types";

export interface Props {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  onPress?: () => void
}

export const Text = ({ children, style, onPress }: Props) => {
  const theme: Theme = useTheme();
  const {
    colors: { text },
  } = theme;

  return <BareText style={[{ color: text }, style]} onPress={onPress}>{children}</BareText>;
};
