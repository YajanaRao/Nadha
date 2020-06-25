import React from "react";
import { Screen } from "../components/Screen/Screen";
import { Container } from "../components/Container/Container";
import { Fab } from "../components/FAB/Fab";
import { Card } from "../components/Card";
import { Appbar } from "../components/Appbar/AppBar";
import { List } from "../components/List/List";
import { Text } from '../components/Text/Text';
import { action } from "@storybook/addon-actions";

const onTogglePressed = action("Clicked on button");

export const LandingScreen = () => (
  <Screen>
    <Appbar title="Nadha" isDark={false} onToggle={onTogglePressed} />
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
    <Container>
      <List title={"Music"} icon="Folder" />
      <List title={"Kannada songs"} icon="Folder" />
    </Container>
    <Container>
      <List title={"Song title 1"} />
      <List title={"Song title 2"} />
    </Container>
    <Fab style={{ position: "absolute", bottom: 10, right: 10 }} />
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
