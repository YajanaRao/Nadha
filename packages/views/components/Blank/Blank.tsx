import React from "react";
import { useTheme } from "emotion-theming";
import { StyleSheet, View } from "react-native";
import { AlertTriangle } from "../Icons/Alert";
import { Theme } from "../../types";

interface Props {
  text: string;
  fetchData(): void;
}

export const Blank = ({ text, fetchData }: Props) => {
  const theme: Theme = useTheme();
  const { colors } = theme;
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <AlertTriangle />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  padding: {
    margin: 4,
  },
});
