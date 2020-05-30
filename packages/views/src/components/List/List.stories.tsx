import React from "react";
import { Screen } from "../Screen";
import { Container } from "../Container/Container";
import { List } from "./List";

export const SongList = () => {
  return (
    <Screen>
      <Container>
        <List title={"Song title 1"} />
        <List title={"Song title 2"} />
      </Container>
    </Screen>
  );
};

export const FolderList = () => {
  return (
    <Screen>
      <Container>
        <List title={"Music"} icon="Folder" />
        <List title={"Kannada songs"} icon="Folder" />
      </Container>
    </Screen>
  );
};

export default {
  title: "List",
};
