import React, { ReactNode } from "react";
import { useTheme } from "emotion-theming";
import { StyleProp, View, ViewStyle } from "react-native";
import { Theme } from "../../types";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const CARD: ViewStyle = {
  padding: 8,
  margin: 4,
  backgroundColor: "red",
};

export const Card = ({ children, style }: Props) => {
  const theme: Theme = useTheme();
  const {
    roundness,
    colors: { surface },
  } = theme;

  return (
    <View
      style={[
        CARD,
        { backgroundColor: surface, borderRadius: roundness },
        style,
      ]}
    >
      {children}
    </View>
  );
};
