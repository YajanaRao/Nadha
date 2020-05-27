import React, { ReactNode } from "react";
import { useTheme } from "emotion-theming";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import { Theme } from "../../types";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const CONTAINER: ViewStyle = {
  padding: 8,
  margin: 4,
};

export const Container = ({ children, style }: Props) => {
  return <View style={[CONTAINER, style]}>{children}</View>;
};
