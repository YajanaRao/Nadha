import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "../components/Button/Button";
import { Container } from "../components/Container/Container";

const onButtonPressed = action("Clicked on button");
export const ButtonWithText = () => (
  <Container>
    <Button onPress={onButtonPressed} title={"What's Happening"} />
  </Container>
);

export const buttonWithEmoji = () => (
  <Container>
    <Button onPress={onButtonPressed} title={"Button"}/>
  </Container>
);

export default {
  title: "Button",
};
