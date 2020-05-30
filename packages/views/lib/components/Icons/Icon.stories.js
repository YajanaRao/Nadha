"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigIcon = exports.FilledHeartWithColor = exports.AlertIcon = exports.OutlinedHeart = void 0;
const react_1 = __importDefault(require("react"));
const Heart_1 = require("./Heart");
const Alert_1 = require("./Alert");
const Container_1 = require("../Container/Container");
exports.OutlinedHeart = () =>
  react_1.default.createElement(Heart_1.Heart, { value: false });
exports.AlertIcon = () =>
  react_1.default.createElement(
    Container_1.Container,
    { style: { width: 60, height: 60 } },
    react_1.default.createElement(Alert_1.AlertTriangle, null)
  );
exports.FilledHeartWithColor = () =>
  react_1.default.createElement(
    Container_1.Container,
    { style: { width: 60, height: 60 } },
    react_1.default.createElement(Heart_1.HeartFilled, { color: "red" })
  );
exports.BigIcon = () =>
  react_1.default.createElement(Heart_1.Heart, { value: true, size: 32 });
exports.default = {
  title: "Icons",
};
//# sourceMappingURL=Icon.stories.js.map
