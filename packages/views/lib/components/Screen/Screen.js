"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Screen = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const emotion_theming_1 = require("emotion-theming");
const SCREEN = {
  flex: 1,
};
exports.Screen = ({ children, style }) => {
  const theme = emotion_theming_1.useTheme();
  const {
    colors: { background },
  } = theme;
  const backgroundColor = background || "white";
  return react_1.default.createElement(
    react_native_1.View,
    { style: [SCREEN, { backgroundColor }, style] },
    children
  );
};
//# sourceMappingURL=Screen.js.map
