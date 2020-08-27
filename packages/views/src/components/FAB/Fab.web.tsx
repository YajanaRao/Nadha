import React from "react";
import { useTheme } from "../../theme";
import { Text, StyleProp, ViewStyle } from "react-native";
import { Theme } from "../../types";
import { Hoverable } from "../Hoverable/Hoverable";

const Color = require("color");

interface Props {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const FAB: ViewStyle = {
  height: 60,
  width: 60,
  borderRadius: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginVertical: 4,
  padding: 8,
  elevation: 4,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
};

export const Fab = ({ style, onPress }: Props) => {
  const theme: Theme = useTheme();
  const {
    colors: { accent, text, primary },
  } = theme;

  const textColor = Color(accent).isDark() ? "white" : "black";

  return (
    <Hoverable
      key="fab"
      onPress={onPress}
      style={[FAB, { backgroundColor: accent, shadowColor: text }, style]}
      onHover={{ backgroundColor: primary }}
    >
      <Text style={{ color: textColor, fontSize: 30 }}>+</Text>
    </Hoverable>
  );
};
