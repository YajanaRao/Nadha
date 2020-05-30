"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const react_1 = __importDefault(require("react"));
const emotion_theming_1 = require("emotion-theming");
const react_native_1 = require("react-native");
const CARD = {
  padding: 8,
  elevation: 8,
  margin: 4,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
};
exports.Card = ({ children, style }) => {
  const theme = emotion_theming_1.useTheme();
  const {
    roundness,
    colors: { surface, text },
  } = theme;
  return react_1.default.createElement(
    react_native_1.View,
    {
      style: [
        CARD,
        {
          backgroundColor: surface,
          borderRadius: roundness,
          shadowColor: text,
        },
        style,
      ],
    },
    children
  );
};
//# sourceMappingURL=Card.web.js.map
