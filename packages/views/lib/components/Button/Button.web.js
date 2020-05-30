"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const emotion_theming_1 = require("emotion-theming");
const react_native_1 = require("react-native");
const BUTTON = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginVertical: 4,
  padding: 8,
  elevation: 4,
};
exports.Button = ({ children, style, onPress }) => {
  const theme = emotion_theming_1.useTheme();
  const {
    roundness,
    colors: { primary, text },
  } = theme;
  return react_1.default.createElement(
    react_native_1.View,
    {
      style: [
        BUTTON,
        { backgroundColor: primary, borderRadius: roundness },
        style,
      ],
    },
    react_1.default.createElement(
      react_native_1.TouchableOpacity,
      { onPress: onPress },
      children
    )
  );
};
//# sourceMappingURL=Button.web.js.map
