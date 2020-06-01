import React, { ReactNode } from "react";
import { Text as BareText, TextStyle, StyleProp } from "react-native";
import { useTheme } from "emotion-theming";
import { Theme } from "../../types";

export interface Props {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

export const Text = ({ children, style }: Props) => {
  const theme: Theme = useTheme();
  const {
    colors: { text },
  } = theme;

  return <BareText style={[{ color: text }, style]}>{children}</BareText>;
};
