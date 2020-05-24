import React, { ReactNode } from "react";
import { useTheme } from "emotion-theming";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import { Theme } from "../../types";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const CONTAINER: ViewStyle = {
  flex: 1,
  padding: 8,
  elevation: 4,
  margin: 4,
};

export const Container = ({ children, style }: Props) => {
  // const theme: Theme = useTheme();
  // const {
  //     roundness,
  //     colors: { primary },
  // } = theme;

  return (
    <View
      style={[
        CONTAINER,
        // { backgroundColor: primary, borderRadius: roundness, color: "white" },
        style,
      ]}
    >
      {children}
    </View>
  );
};
