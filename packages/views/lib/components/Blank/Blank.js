"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blank = void 0;
const react_1 = __importDefault(require("react"));
const emotion_theming_1 = require("emotion-theming");
const react_native_1 = require("react-native");
const Alert_1 = require("../Icons/Alert");
exports.Blank = ({ text, fetchData }) => {
  const theme = emotion_theming_1.useTheme();
  const { colors } = theme;
  return react_1.default.createElement(
    react_native_1.View,
    { style: [styles.container, { backgroundColor: colors.background }] },
    react_1.default.createElement(Alert_1.AlertTriangle, null)
  );
};
const styles = react_native_1.StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  padding: {
    margin: 4,
  },
});
//# sourceMappingURL=Blank.js.map
