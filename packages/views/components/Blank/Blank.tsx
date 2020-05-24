import React from "react";
import { useTheme } from "emotion-theming";
import { StyleSheet, View } from "react-native";
import { AlertTriangle } from "../Icons/Alert";

interface Props {
  text: string;
  fetchData(): void;
}

export const Blank = ({ text, fetchData }: Props) => {
  const theme = useTheme();
  const { colors } = theme;
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <AlertTriangle />
      <View style={styles.padding}>
        <Button icon="refresh" mode="text" onPress={fetchData}>
          Refresh
        </Button>
      </View>
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
