"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderList = exports.SongList = void 0;
const react_1 = __importDefault(require("react"));
const Screen_1 = require("../Screen");
const Container_1 = require("../Container/Container");
const List_1 = require("./List");
exports.SongList = () => {
  return react_1.default.createElement(
    Screen_1.Screen,
    null,
    react_1.default.createElement(
      Container_1.Container,
      null,
      react_1.default.createElement(List_1.List, { title: "Song title 1" }),
      react_1.default.createElement(List_1.List, { title: "Song title 2" })
    )
  );
};
exports.FolderList = () => {
  return react_1.default.createElement(
    Screen_1.Screen,
    null,
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
    )
  );
};
exports.default = {
  title: "List",
};
//# sourceMappingURL=List.stories.js.map
