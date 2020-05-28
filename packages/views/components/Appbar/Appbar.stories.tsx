import React from "react";
import { action } from "@storybook/addon-actions";
import { Appbar } from "./AppBar";
import { Screen } from "../Screen";

const onButtonPressed = action("Clicked on button");

export const ButtonWithText = () => (
  <Screen>
    <Appbar />
  </Screen>
);

export default {
  title: "FAB",
};
