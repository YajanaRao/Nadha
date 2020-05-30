"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appbar = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const emotion_theming_1 = require("emotion-theming");
const Color = require("color");
const APPBAR_CONTAINER = {
  height: 60,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 16,
  elevation: 4,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
};
exports.Appbar = () => {
  const theme = emotion_theming_1.useTheme();
  const {
    colors: { primary, text },
  } = theme;
  const color = Color(primary);
  const textColor = color.isDark() ? "white" : "black";
  return react_1.default.createElement(
    react_native_1.View,
    {
      style: [
        APPBAR_CONTAINER,
        { backgroundColor: primary, shadowColor: text },
      ],
    },
    react_1.default.createElement(
      react_native_1.Text,
      { style: { color: textColor, fontSize: 24, fontWeight: "800" } },
      "Nadha"
    )
  );
};
//# sourceMappingURL=AppBar.js.map
