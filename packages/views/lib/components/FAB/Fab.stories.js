"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateActionFab = void 0;
const react_1 = __importDefault(require("react"));
const addon_actions_1 = require("@storybook/addon-actions");
const Fab_1 = require("./Fab");
const Container_1 = require("../Container/Container");
const onButtonPressed = addon_actions_1.action("Clicked on button");
exports.CreateActionFab = () =>
  react_1.default.createElement(
    Container_1.Container,
    null,
    react_1.default.createElement(Fab_1.Fab, { onPress: onButtonPressed })
  );
exports.default = {
  title: "FAB",
};
//# sourceMappingURL=Fab.stories.js.map
