import React, { ReactNode } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { Theme } from "../../types";

import { useTheme } from "emotion-theming";

export interface Screen {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const SCREEN: ViewStyle = {
  flex: 1,
};

export const Screen = ({ children, style }: Screen) => {
  const theme: Theme = useTheme();
  const {
    colors: { background },
  } = theme;
  return (
    <View style={[SCREEN, { backgroundColor: background }, style]}>
      {children}
    </View>
  );
};
