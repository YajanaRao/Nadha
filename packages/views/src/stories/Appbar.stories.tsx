import React from "react";
import { Appbar } from "../components/Appbar/AppBar";
import { Screen } from "../components/Screen";
import { action } from "@storybook/addon-actions";

const onTogglePressed = action("Clicked on button");


export const AppBar = () => (
  <Screen>
    <Appbar title="Nadha" isDark={false} onToggle={onTogglePressed} />
  </Screen>
);

export default {
  title: "Appbar",
};
