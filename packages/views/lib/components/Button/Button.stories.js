"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonWithEmoji = exports.ButtonWithText = void 0;
const react_1 = __importDefault(require("react"));
const addon_actions_1 = require("@storybook/addon-actions");
const Button_1 = require("./Button");
const Container_1 = require("../Container/Container");
const onButtonPressed = addon_actions_1.action("Clicked on button");
exports.ButtonWithText = () =>
  react_1.default.createElement(
    Container_1.Container,
    null,
    react_1.default.createElement(
      Button_1.Button,
      { onPress: onButtonPressed },
      "What's Happening"
    )
  );
exports.buttonWithEmoji = () =>
  react_1.default.createElement(
    Container_1.Container,
    null,
    react_1.default.createElement(
      Button_1.Button,
      { onPress: onButtonPressed },
      "\uD83D\uDD25"
    )
  );
exports.default = {
  title: "Button",
};
//# sourceMappingURL=Button.stories.js.map
