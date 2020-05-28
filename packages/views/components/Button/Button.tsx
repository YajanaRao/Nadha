import React, { ReactNode } from "react";
import { useTheme } from "emotion-theming";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import { Theme } from "../../types";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  onPress?: () => void;
}

const BUTTON: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginVertical: 4,
  padding: 8,
  elevation: 4,
};

export const Button = ({ children, style, onPress }: Props) => {
  const theme: Theme = useTheme();
  const {
    roundness,
    colors: { primary },
  } = theme;

  return (
    <View
      style={[
        BUTTON,
        { backgroundColor: primary, borderRadius: roundness },
        style,
      ]}
    >
      <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
    </View>
  );
};
