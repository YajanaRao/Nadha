import React from "react";
import { View, ViewStyle, Text, Platform, StatusBar } from "react-native";
import { useTheme } from "../../theme";
import { Theme } from "../../types";
import { Switch } from '../Switch/Switch'
const Color = require("color");

const APPROX_STATUSBAR_HEIGHT = Platform.select({
  android: StatusBar.currentHeight,
  ios: Platform.Version < 11 ? 50 : 0,
});

const APPBAR_CONTAINER: ViewStyle = {
  marginTop: APPROX_STATUSBAR_HEIGHT,
  height: 60,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 16,
  elevation: 4,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.1,
  shadowRadius: 5
};

export interface Props {
  title: string;
  isDark: boolean;
  onToggle: () => void
}

export const Appbar = ({ title, onToggle, isDark = false }: Props) => {
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
        {title}
      </Text>
      <Switch value={isDark} onValueChange={onToggle} />
    </View>
  );
};
