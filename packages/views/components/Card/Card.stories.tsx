import React from "react";
import { Screen } from "../Screen";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import { Text } from "react-native";
import { Card } from "./Card";

export const CardWithText = () => (
  <Screen>
    <Container>
      <Card>
        <Text>
          Hi everyone! Seems like there hasn't been much going on in this issue
          lately. If there are still questions, comments, or bugs, please feel
          free to continue the discussion. Unfortunately, we don't have time to
          get to every issue. We are always open to contributions so please send
          us a pull request if you would like to help. Inactive issues will be
          closed after 30 days. Thanks!
        </Text>
      </Card>
    </Container>
  </Screen>
);

export const CardWithChildrens = () => (
  <Screen>
    <Container>
      <Card>
        <Text>
          {" "}
          Hi everyone! Seems like there hasn't been much going on in this issue
          lately. If there are still questions, comments, or bugs, please feel
          free to continue the discussion. Unfortunately, we don't have time to
          get to every issue. We are always open to contributions so please send
          us a pull request if you would like to help. Inactive issues will be
          closed after 30 days. Thanks!
        </Text>
        <Button>Submit</Button>
      </Card>
    </Container>
  </Screen>
);

export default {
  title: "Card",
};
