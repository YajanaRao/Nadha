import { create } from "@storybook/theming";
import React from "react";
import { addParameters, configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "emotion-theming";
import { DefaultTheme } from "../src/theme";
addDecorator((storyFn) => (
  <ThemeProvider theme={DefaultTheme}>{storyFn()}</ThemeProvider>
));

// Option defaults:
addParameters({
  options: {
    theme: create({
      base: "light",
      brandTitle: "Nadha",
      brandUrl: "https://github.com/YajanaRao",
      // To control appearance:
      // brandImage: 'http://url.of/some.svg',
    }),
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\/|\./,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: /\|/,
    panelPosition: "bottom",
  },
});

const req = require.context("../src/components", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

// addDecorator(centered);

configure(loadStories, module);
