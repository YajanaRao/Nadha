import React from "react";
import { View, Text, ViewStyle } from "react-native";
import { useTheme } from "emotion-theming";
import { Theme } from "../../types";
import { Icon } from "../Icons";

export interface Props {
  title?: string;
  description?: string;
  icon?: string;
}

const LIST_CONTAINER: ViewStyle = {
  flex: 1,
  padding: 8,
  marginVertical: 2,
  flexDirection: "row",
  justifyContent: "space-between",
};

const ICON_CONTAINER: ViewStyle = {
  paddingHorizontal: 8,
  // flex: 1
};

const TEXT_CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
};

export const List = ({ title, description, icon }: Props) => {
  const theme: Theme = useTheme();
  const {
    colors: { surface },
  } = theme;
  return (
    <View style={[LIST_CONTAINER, { backgroundColor: surface }]}>
      {icon ? (
        <View style={ICON_CONTAINER}>
          <Icon name={icon} />
        </View>
      ) : (
        false
      )}
      <View style={TEXT_CONTAINER}>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};