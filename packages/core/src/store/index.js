"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureStore = void 0;
var redux_1 = require("redux");
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var async_storage_1 = __importDefault(
  require("@react-native-community/async-storage")
);
var redux_persist_1 = require("redux-persist");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var reducers_1 = require("../reducers");
var persistConfig = {
  key: "root",
  storage: async_storage_1.default,
  blacklist: ["query"],
};
var middleware = [redux_thunk_1.default];
var persistedReducer = redux_persist_1.persistReducer(
  persistConfig,
  reducers_1.RootReducer
);
exports.configureStore = function () {
  var store = redux_1.createStore(
    persistedReducer,
    redux_devtools_extension_1.composeWithDevTools(
      redux_1.applyMiddleware.apply(void 0, middleware)
    )
  );
  var persistor = redux_persist_1.persistStore(store);
  return { store: store, persistor: persistor };
};
