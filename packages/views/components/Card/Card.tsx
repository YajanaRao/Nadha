import React, { ReactNode } from "react";
import { useTheme } from "emotion-theming";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import { Theme } from "../../types";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const CARD: ViewStyle = {
  padding: 8,
  elevation: 8,
  margin: 4,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
};

export const Card = ({ children, style }: Props) => {
  const theme: Theme = useTheme();
  const {
    roundness,
    colors: { surface, text },
  } = theme;

  return (
    <View
      style={[
        CARD,
        {
          backgroundColor: surface,
          borderRadius: roundness,
          shadowColor: text,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
