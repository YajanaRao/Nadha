import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-community/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootReducer } from "../reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["query"],
};

const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const configureStore = () => {
  const store: any = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  const persistor: any = persistStore(store);
  return { store, persistor };
};
