import React from "react";
import { action } from "@storybook/addon-actions";
import { Fab } from "./Fab";
import { Container } from "../Container/Container";

const onButtonPressed = action("Clicked on button");
export const ButtonWithText = () => (
  <Container>
    <Fab onPress={onButtonPressed}>What's Happening</Fab>
  </Container>
);

export const buttonWithEmoji = () => (
  <Container>
    <Fab onPress={onButtonPressed}>🔥</Fab>
  </Container>
);

export default {
  title: "FAB",
};
