"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const emotion_theming_1 = require("emotion-theming");
const Icons_1 = require("../Icons");
const Color = require("color");
const LIST_CONTAINER = {
  padding: 8,
  marginVertical: 2,
  flexDirection: "row",
  justifyContent: "space-between",
};
const ICON_CONTAINER = {
  paddingHorizontal: 8,
};
const TEXT_CONTAINER = {
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
};
exports.List = ({ title, description, icon }) => {
  const theme = emotion_theming_1.useTheme();
  const {
    colors: { surface, text },
  } = theme;
  const color = Color(text);
  return react_1.default.createElement(
    react_native_1.View,
    { style: [LIST_CONTAINER, { backgroundColor: surface }] },
    icon
      ? react_1.default.createElement(
          react_native_1.View,
          { style: ICON_CONTAINER },
          react_1.default.createElement(Icons_1.Icon, { name: icon })
        )
      : false,
    react_1.default.createElement(
      react_native_1.View,
      { style: TEXT_CONTAINER },
      react_1.default.createElement(
        react_native_1.Text,
        { style: { color: text } },
        title
      ),
      description
        ? react_1.default.createElement(
            react_native_1.Text,
            { style: { fontSize: 12, color: color.opaquer(0.8) } },
            description
          )
        : false
    )
  );
};
//# sourceMappingURL=List.js.map
