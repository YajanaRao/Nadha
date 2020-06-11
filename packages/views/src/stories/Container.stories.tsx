import React from "react";
import { Screen } from "../components/Screen";
import { Text } from "react-native";
import { Container } from "../components/Container/Container";

export const ContainerWithText = () => (
  <Screen>
    <Container>
      <Text>
        Hi everyone! Seems like there hasn't been much going on in this issue
        lately. If there are still questions, comments, or bugs, please feel
        free to continue the discussion. Unfortunately, we don't have time to
        get to every issue. We are always open to contributions so please send
        us a pull request if you would like to help. Inactive issues will be
        closed after 30 days. Thanks!
      </Text>
    </Container>
  </Screen>
);

export const ContainerWithChildrens = () => (
  <Screen>
    <Container>
      <Text>Nested children's here</Text>
    </Container>
  </Screen>
);

export default {
  title: "Container",
};
