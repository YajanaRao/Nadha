import React from "react";
import { Screen } from "./Screen";
import { View, Text } from "react-native";

export const ScreenWithText = () => (
  <Screen>
    Hi everyone! Seems like there hasn't been much going on in this issue
    lately. If there are still questions, comments, or bugs, please feel free to
    continue the discussion. Unfortunately, we don't have time to get to every
    issue. We are always open to contributions so please send us a pull request
    if you would like to help. Inactive issues will be closed after 30 days.
    Thanks!
  </Screen>
);

export const ScreenWithChildrens = () => (
  <Screen>
    <View>
      <Text>Nested children's here</Text>
    </View>
  </Screen>
);

export default {
  title: "Screen",
};
