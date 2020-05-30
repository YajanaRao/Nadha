"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenWithChildrens = exports.LandingScreen = void 0;
const react_1 = __importDefault(require("react"));
const Screen_web_1 = require("./Screen.web");
const react_native_1 = require("react-native");
const Container_1 = require("../Container/Container");
const Fab_1 = require("../FAB/Fab");
const Card_1 = require("../Card");
const AppBar_1 = require("../Appbar/AppBar");
const List_1 = require("../List/List");
exports.LandingScreen = () =>
  react_1.default.createElement(
    Screen_web_1.Screen,
    null,
    react_1.default.createElement(AppBar_1.Appbar, null),
    react_1.default.createElement(
      Container_1.Container,
      null,
      react_1.default.createElement(
        Card_1.Card,
        null,
        "Hi everyone! Seems like there hasn't been much going on in this issue lately. If there are still questions, comments, or bugs, please feel free to continue the discussion. Unfortunately, we don't have time to get to every issue. We are always open to contributions so please send us a pull request if you would like to help. Inactive issues will be closed after 30 days. Thanks!"
      )
    ),
    react_1.default.createElement(
      Container_1.Container,
      null,
      react_1.default.createElement(List_1.List, {
        title: "Music",
        icon: "Folder",
      }),
      react_1.default.createElement(List_1.List, {
        title: "Kannada songs",
        icon: "Folder",
      })
    ),
    react_1.default.createElement(
      Container_1.Container,
      null,
      react_1.default.createElement(List_1.List, { title: "Song title 1" }),
      react_1.default.createElement(List_1.List, { title: "Song title 2" })
    ),
    react_1.default.createElement(Fab_1.Fab, {
      style: { position: "absolute", bottom: 10, right: 10 },
    })
  );
exports.ScreenWithChildrens = () =>
  react_1.default.createElement(
    Screen_web_1.Screen,
    null,
    react_1.default.createElement(
      Container_1.Container,
      null,
      react_1.default.createElement(
        react_native_1.Text,
        null,
        "Nested children's here"
      )
    )
  );
exports.default = {
  title: "Screen",
};
//# sourceMappingURL=Screen.stories.js.map
