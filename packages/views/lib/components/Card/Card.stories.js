"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardWithChildrens = exports.CardWithText = void 0;
const react_1 = __importDefault(require("react"));
const Screen_1 = require("../Screen");
const Container_1 = require("../Container/Container");
const Button_1 = require("../Button");
const react_native_1 = require("react-native");
const Card_1 = require("./Card");
exports.CardWithText = () =>
  react_1.default.createElement(
    Screen_1.Screen,
    null,
    react_1.default.createElement(
      Container_1.Container,
      null,
      react_1.default.createElement(
        Card_1.Card,
        null,
        react_1.default.createElement(
          react_native_1.Text,
          null,
          "Hi everyone! Seems like there hasn't been much going on in this issue lately. If there are still questions, comments, or bugs, please feel free to continue the discussion. Unfortunately, we don't have time to get to every issue. We are always open to contributions so please send us a pull request if you would like to help. Inactive issues will be closed after 30 days. Thanks!"
        )
      )
    )
  );
exports.CardWithChildrens = () =>
  react_1.default.createElement(
    Screen_1.Screen,
    null,
    react_1.default.createElement(
      Container_1.Container,
      null,
      react_1.default.createElement(
        Card_1.Card,
        null,
        react_1.default.createElement(
          react_native_1.Text,
          null,
          " ",
          "Hi everyone! Seems like there hasn't been much going on in this issue lately. If there are still questions, comments, or bugs, please feel free to continue the discussion. Unfortunately, we don't have time to get to every issue. We are always open to contributions so please send us a pull request if you would like to help. Inactive issues will be closed after 30 days. Thanks!"
        ),
        react_1.default.createElement(Button_1.Button, null, "Submit")
      )
    )
  );
exports.default = {
  title: "Card",
};
//# sourceMappingURL=Card.stories.js.map
