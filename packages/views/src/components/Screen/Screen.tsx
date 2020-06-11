import React, { ReactNode } from "react";
import { View, StyleProp, ViewStyle, Platform, Dimensions } from "react-native";
import { Theme } from "../../types";

import { useTheme } from "emotion-theming";

export interface Screen {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Screen = ({ children, style }: Screen) => {
  const theme: Theme = useTheme();
  const {
    colors: { background },
  } = theme;
  const backgroundColor = background || "white";
  return (
    <View
      style={[
        {
          backgroundColor,
          ...Platform.select({
            web: {
              height: "100vh",
              overflowY: "auto",
            },
            default: {
              flex: 1,
            },
          }),
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
