import React, { ReactNode } from "react";
import { Text as BareText, TextStyle, StyleProp } from "react-native";
import { useTheme } from "../../theme";
import { Theme } from "../../types";

export interface TextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
}

export const Text = ({ children, style, onPress }: TextProps) => {
  const theme: Theme = useTheme();
  const {
    colors: { text },
  } = theme;

  return (
    <BareText style={[{ color: text }, style]} onPress={onPress}>
      {children}
    </BareText>
  );
};
