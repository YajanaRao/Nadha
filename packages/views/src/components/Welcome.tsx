import React from "react";
import { View, ViewStyle } from "react-native";
import { Logo } from "./Icons/Logo";

const CONTAINER: ViewStyle = {
  alignItems: "center",
  backgroundColor: "white",
  flex: 1,
  justifyContent: "center",
};

export const Welcome = () => (
  <View style={CONTAINER}>
    <Logo />
  </View>
);
