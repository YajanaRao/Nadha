import React from "react";
import { Screen } from "./Screen.web";
import { View, Text } from "react-native";
import { Container } from "../Container/Container";

export const LandingScreen = () => (
  <Screen>
    <Container>
      Hi everyone! Seems like there hasn't been much going on in this issue
      lately. If there are still questions, comments, or bugs, please feel free
      to continue the discussion. Unfortunately, we don't have time to get to
      every issue. We are always open to contributions so please send us a pull
      request if you would like to help. Inactive issues will be closed after 30
      days. Thanks!
    </Container>
  </Screen>
);

export const ScreenWithChildrens = () => (
  <Screen>
    <Container>
      <Text>Nested children's here</Text>
    </Container>
  </Screen>
);

export default {
  title: "Screen",
};
