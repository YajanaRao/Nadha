/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import {ThemeProvider} from "@nadha/views";
import {configureStore, PlayerContextProvider} from "@nadha/core";
import Navigation from "./navigation";
import {Provider} from "react-redux";
// @ts-ignore
import ErrorBoundary from "./components/ErrorBoundary";

const {store} = configureStore();


const App = () => {

    return (
        <Provider store={store}>
            <ThemeProvider>
                <ErrorBoundary>
                    <PlayerContextProvider>
                        <Navigation/>
                    </PlayerContextProvider>
                </ErrorBoundary>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
