"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Folder = ({ color }) => {
  return react_1.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    react_1.default.createElement(
      "g",
      { "data-name": "Layer 2", fill: color },
      react_1.default.createElement(
        "g",
        { "data-name": "folder" },
        react_1.default.createElement("rect", {
          width: "24",
          height: "24",
          opacity: "0",
        }),
        react_1.default.createElement("path", {
          d:
            "M19.5 20.5h-15A2.47 2.47 0 0 1 2 18.07V5.93A2.47 2.47 0 0 1 4.5 3.5h4.6a1 1 0 0 1 .77.37l2.6 3.18h7A2.47 2.47 0 0 1 22 9.48v8.59a2.47 2.47 0 0 1-2.5 2.43zM4 13.76v4.31a.46.46 0 0 0 .5.43h15a.46.46 0 0 0 .5-.43V9.48a.46.46 0 0 0-.5-.43H12a1 1 0 0 1-.77-.37L8.63 5.5H4.5a.46.46 0 0 0-.5.43z",
        })
      )
    )
  );
};
exports.default = Folder;
//# sourceMappingURL=Folder.js.map
