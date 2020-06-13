import React, { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

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
