import React from "react";
import { Text } from "react-native";
import { Screen, Container, List, Card, Appbar, Fab } from "@nadha/views";

export function Home() {
  return (
    <Screen>
      <Appbar />
      <Container>
        <Card>
          <Text style={{ fontSize: 18, marginBottom: 2 }}>Hi everyone!</Text>
          <Text>
            Hi everyone! Seems like there hasn't been much going on in this
            issue lately. If there are still questions, comments, or bugs,
            please feel free to continue the discussion. Unfortunately, we don't
            have time to get to every issue. We are always open to contributions
            so please send us a pull request if you would like to help. Inactive
            issues will be closed after 30 days. Thanks!
          </Text>
        </Card>
      </Container>
      <Container>
        <List title={"Music"} description={"20 songs"} icon="Folder" />
        <List title={"Kannada songs"} description={"32 songs"} icon="Folder" />
      </Container>
      <Container>
        <List title={"Song title 1"} />
        <List title={"Song title 2"} />
      </Container>
      <Fab style={{ position: "absolute", bottom: 10, right: 10 }} />
    </Screen>
  );
}
