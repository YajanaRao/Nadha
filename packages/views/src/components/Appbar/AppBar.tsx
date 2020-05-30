import React from "react";
import { View, ViewStyle, Text } from "react-native";
import { useTheme } from "emotion-theming";
import { Theme } from "../../types";
const Color = require("color");

const APPBAR_CONTAINER: ViewStyle = {
  height: 60,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 16,
  elevation: 4,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
};

export const Appbar = () => {
  const theme: Theme = useTheme();
  const {
    colors: { primary, text },
  } = theme;
  const color = Color(primary);
  const textColor = color.isDark() ? "white" : "black";
  return (
    <View
      style={[
        APPBAR_CONTAINER,
        { backgroundColor: primary, shadowColor: text },
      ]}
    >
      <Text style={{ color: textColor, fontSize: 24, fontWeight: "800" }}>
        Nadha
      </Text>
    </View>
  );
};
