import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {RootReducer} from "../reducers";

const middleware = [thunk];

export const configureStore = () => {
    const store: any = createStore(
        RootReducer,
        composeWithDevTools(applyMiddleware(...middleware))
    );
    return {store};
};
