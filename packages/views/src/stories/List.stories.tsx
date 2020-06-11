import React from "react";
import {Screen} from "../components/Screen";
import {Container} from "../components/Container/Container";
import {List} from "../components/List/List";

export const SimpleList = () => {
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

export const SongList = () => {
    return(
        <Screen>
            <Container>
                <List title={"Music"} icon="Music" />
            </Container>
        </Screen>
    );
};

export const NestedList = () => {
    return(
        <Screen>
            <Container>
                <List title={"Music"} icon="Folder" />
                <List title={"Kannada songs"} icon="Folder" />
                <List title={"Matte maleyagide"} icon="Music" description={"Sonu Nigam"} />
            </Container>
        </Screen>
    );
};

export default {
  title: "List",
};
