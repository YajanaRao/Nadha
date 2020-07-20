import React, { ReactNode } from "react";
import { StatusBar, StyleProp, ViewStyle, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Theme } from "../../types";

import { useTheme } from "../../theme";

export interface Screen {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Screen = ({ children, style }: Screen) => {
  const theme: Theme = useTheme();
  const {
    dark,
    colors: { background, primary },
  } = theme;
  const backgroundColor = background || "white";
  return (
    <SafeAreaView
      style={[
        {
          backgroundColor,
          ...Platform.select({
            web: {
              height: "100vh",
              overflowY: "auto",
              overflowX: "hidden",
            },
            default: {
              flex: 1,
            },
          }),
        },
        style,
      ]}
    >
      <StatusBar
        barStyle={dark ? "light-content" : "dark-content"}
        backgroundColor={primary}
      />
      {children}
    </SafeAreaView>
  );
};
