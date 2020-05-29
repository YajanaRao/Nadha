import React from "react";
import { useTheme } from "emotion-theming";
import { TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import { Theme } from "../../types";

interface Props {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const FAB: ViewStyle = {
  height: 60,
  width: 60,
  borderRadius: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginVertical: 4,
  padding: 8,
  elevation: 4,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
};

export const Fab = ({ style, onPress }: Props) => {
  const theme: Theme = useTheme();
  const {
    colors: { primary, surface, text },
  } = theme;

  return (
    <TouchableOpacity
      key="fab"
      // onPress={onPress}
      style={[FAB, { backgroundColor: primary, shadowColor: text }, style]}
    >
      <Text style={{ color: surface, fontSize: 30 }}>+</Text>
    </TouchableOpacity>
  );
};
