import React, { ReactNode } from "react";
import { useTheme } from "../../theme";
import { StyleProp, View, ViewStyle } from "react-native";
import { Theme } from "../../types";
const Color = require("color");

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const CARD: ViewStyle = {
  padding: 12,
  elevation: 1,
  margin: 4,
  shadowOffset: { width: 0, height: 0.5 },
  shadowOpacity: 0.24,
  shadowRadius: 0.75,
};

export const Card = ({ children, style }: Props) => {
  const theme: Theme = useTheme();
  const {
    roundness,
    border,
    colors: { surface, text },
  } = theme;

  let borderColor = Color(text).fade(0.75);

  return (
    <View
      style={[
        CARD,
        {
          backgroundColor: surface,
          borderRadius: roundness,
          shadowColor: 'black',
          borderWidth: border,
          borderColor,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
