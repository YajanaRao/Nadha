"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fab = void 0;
const react_1 = __importDefault(require("react"));
const emotion_theming_1 = require("emotion-theming");
const react_native_1 = require("react-native");
const FAB = {
  height: 60,
  width: 60,
  borderRadius: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginVertical: 4,
  padding: 8,
  elevation: 4,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
};
exports.Fab = ({ style, onPress }) => {
  const theme = emotion_theming_1.useTheme();
  const {
    colors: { primary, surface, text },
  } = theme;
  return react_1.default.createElement(
    react_native_1.TouchableOpacity,
    {
      key: "fab",
      // onPress={onPress}
      style: [FAB, { backgroundColor: primary, shadowColor: text }, style],
    },
    react_1.default.createElement(
      react_native_1.Text,
      { style: { color: surface, fontSize: 30 } },
      "+"
    )
  );
};
//# sourceMappingURL=Fab.js.map
