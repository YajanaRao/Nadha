/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from "react";
import {ThemeProvider} from "@nadha/views";
import {configureStore, Player, PlayerContext, playerMachine} from "@nadha/core";
import Navigation from "./navigation";
import {Provider} from "react-redux";
// @ts-ignore
import ErrorBoundary from "./components/ErrorBoundary";
import {useMachine} from "@xstate/react";

const {store} = configureStore();


const App = () => {
    const [current, send] = useMachine(playerMachine);

    useEffect(() => {
        Player.setup();
        return () => Player.destroy();
    });

    return (
        <Provider store={store}>
            {/*<PersistGate loading={<Loader/>} persistor={persistor}>*/}
            <ThemeProvider>
                <ErrorBoundary>
                    <PlayerContext.Provider value={{current, send}}>
                        <Navigation/>
                    </PlayerContext.Provider>
                </ErrorBoundary>
            </ThemeProvider>
            {/*</PersistGate>*/}
        </Provider>
    );
};

export default App;
