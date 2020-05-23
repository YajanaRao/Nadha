import React from "react";
import { Text } from "react-native";

export const Icon = ({
  name,
  color,
  size,
}: {
  name: string;
  color?: string;
  size?: number;
}) => {
  return <Text>{name}</Text>;
};
