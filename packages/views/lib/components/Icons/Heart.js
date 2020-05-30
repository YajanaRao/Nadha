"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heart = exports.HeartFilled = exports.HeartOutline = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
exports.HeartOutline = ({ color = "black" }) =>
  react_1.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    react_1.default.createElement(
      "g",
      { "data-name": "Layer 2" },
      react_1.default.createElement(
        "g",
        { "data-name": "heart", fill: color },
        react_1.default.createElement("rect", {
          width: "24",
          height: "24",
          opacity: "0",
        }),
        react_1.default.createElement("path", {
          d:
            "M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21zM7.22 6a3.2 3.2 0 0 0-2.28.94 3.24 3.24 0 0 0 0 4.57L12 18.58l7.06-7.07a3.24 3.24 0 0 0 0-4.57 3.32 3.32 0 0 0-4.56 0l-1.79 1.8a1 1 0 0 1-1.42 0L9.5 6.94A3.2 3.2 0 0 0 7.22 6z",
        })
      )
    )
  );
exports.HeartFilled = ({ color = "black" }) =>
  react_1.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    react_1.default.createElement(
      "g",
      { "data-name": "Layer 2" },
      react_1.default.createElement(
        "g",
        { "data-name": "heart", fill: color },
        react_1.default.createElement("rect", {
          width: "24",
          height: "24",
          opacity: "0",
        }),
        react_1.default.createElement("path", {
          d:
            "M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21z",
        })
      )
    )
  );
exports.Heart = ({ value, size = 16 }) => {
  const [filled, setFilled] = react_1.useState(value);
  if (filled) {
    return react_1.default.createElement(
      react_native_1.TouchableOpacity,
      { onPress: () => setFilled(false), style: { height: size, width: size } },
      react_1.default.createElement(exports.HeartFilled, { color: "red" })
    );
  }
  return react_1.default.createElement(
    react_native_1.TouchableOpacity,
    { onPress: () => setFilled(true), style: { height: size, width: size } },
    react_1.default.createElement(exports.HeartOutline, null)
  );
};
exports.default = exports.Heart;
//# sourceMappingURL=Heart.js.map
