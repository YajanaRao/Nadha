"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const CONTAINER = {
  padding: 8,
  margin: 4,
};
exports.Container = ({ children, style }) => {
  return react_1.default.createElement(
    react_native_1.View,
    { style: [CONTAINER, style] },
    children
  );
};
//# sourceMappingURL=Container.js.map
