import React from "react";
import { useTheme } from "emotion-theming";
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ButtonProps,
  ViewStyle,
} from "react-native";
import { Theme } from "../../types";

interface Props {
  onPress: () => void;
  style: StyleProp<ButtonProps>;
}

const FAB: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginVertical: 4,
  padding: 8,
  elevation: 4,
};

export const Fab = ({ style, onPress }: Props) => {
  const theme: Theme = useTheme();
  const {
    roundness,
    colors: { primary },
  } = theme;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        FAB,
        { backgroundColor: primary, borderRadius: roundness },
        style,
      ]}
    >
      <Text>+</Text>
    </TouchableOpacity>
  );
};
