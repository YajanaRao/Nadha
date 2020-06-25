import React from "react";
import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { useTheme } from "../../theme";
import { Theme } from "../../types";
import { Icon } from "../Icons";

const Color = require("color");

export interface Props {
  title?: string;
  description?: string;
  icon?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  active?: boolean;
}

const LIST_CONTAINER: ViewStyle = {
  padding: 12,
  marginVertical: 2,
  flexDirection: "row",
  justifyContent: "space-between",
  flex: 1,
};

const ICON_CONTAINER: ViewStyle = {
  maxWidth: 40,
  marginRight: 16,
  justifyContent: "center",
  alignItems: "center",
};

const TEXT_CONTAINER: ViewStyle = {
  width: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
};

export const List = ({
  title,
  description,
  icon,
  onPress,
  style,
  active = false,
}: Props) => {
  const theme: Theme = useTheme();
  const {
    border,
    colors: { surface, text, primary },
    roundness,
  } = theme;

  const getActiveTextColor = () => {
    let textColor = "black";
    let color = Color(primary);
    if (color.isDark()) {
      textColor = "white";
    }
    return textColor;
  };

  let backgroundColor = active ? primary : surface;
  let textColor = active ? getActiveTextColor() : text;
  const titleColor = Color(textColor).alpha(0.87).rgb().string();
  const descriptionColor = Color(textColor).alpha(0.54).rgb().string();

  const color = Color(textColor);
  let borderColor = color.fade(0.75).hex();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        LIST_CONTAINER,
        {
          backgroundColor,
          borderRadius: roundness,
          borderWidth: border,
          borderColor,
        },
        style,
      ]}
    >
      {icon ? (
        <View style={ICON_CONTAINER}>
          <Icon name={icon} color={descriptionColor} />
        </View>
      ) : (
        false
      )}
      <View style={TEXT_CONTAINER}>
        <Text style={{ color: titleColor, fontSize: 14 }}>{title}</Text>
        {description ? (
          <Text style={{ fontSize: 12, color: descriptionColor, marginTop: 2 }}>
            {description}
          </Text>
        ) : (
          false
        )}
      </View>
    </TouchableOpacity>
  );
};
