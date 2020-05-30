import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button";
import { Container } from "../Container/Container";

const onButtonPressed = action("Clicked on button");
export const ButtonWithText = () => (
  <Container>
    <Button onPress={onButtonPressed}>What's Happening</Button>
  </Container>
);

export const buttonWithEmoji = () => (
  <Container>
    <Button onPress={onButtonPressed}>🔥</Button>
  </Container>
);

export default {
  title: "Button",
};
