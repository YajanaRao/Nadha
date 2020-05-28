import React from "react";
import { Screen } from "./Screen.web";
import { View, Text } from "react-native";
import { Container } from "../Container/Container";
import { Fab } from "../FAB/Fab";
import { Card } from "../Card";
import { Appbar } from "../Appbar/AppBar";

export const LandingScreen = () => (
  <Screen>
    <Appbar />
    <Container>
      <Card>
        Hi everyone! Seems like there hasn't been much going on in this issue
        lately. If there are still questions, comments, or bugs, please feel
        free to continue the discussion. Unfortunately, we don't have time to
        get to every issue. We are always open to contributions so please send
        us a pull request if you would like to help. Inactive issues will be
        closed after 30 days. Thanks!
      </Card>
    </Container>
    <Fab style={{ position: "absolute", bottom: 0, right: 0 }} />
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
