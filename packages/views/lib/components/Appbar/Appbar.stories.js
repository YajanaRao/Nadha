"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonWithText = void 0;
const react_1 = __importDefault(require("react"));
const addon_actions_1 = require("@storybook/addon-actions");
const AppBar_1 = require("./AppBar");
const Screen_1 = require("../Screen");
const onButtonPressed = addon_actions_1.action("Clicked on button");
exports.ButtonWithText = () =>
  react_1.default.createElement(
    Screen_1.Screen,
    null,
    react_1.default.createElement(AppBar_1.Appbar, null)
  );
exports.default = {
  title: "FAB",
};
//# sourceMappingURL=Appbar.stories.js.map
