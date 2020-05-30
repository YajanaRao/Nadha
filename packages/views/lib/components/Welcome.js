"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Welcome = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Logo_1 = require("./Icons/Logo");
const CONTAINER = {
  alignItems: "center",
  backgroundColor: "white",
  flex: 1,
  justifyContent: "center",
};
exports.Welcome = () =>
  react_1.default.createElement(
    react_native_1.View,
    { style: CONTAINER },
    react_1.default.createElement(Logo_1.Logo, null)
  );
//# sourceMappingURL=Welcome.js.map
