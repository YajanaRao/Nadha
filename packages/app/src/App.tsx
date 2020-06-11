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
import {SafeAreaView, Text, Dimensions} from "react-native";
import {DefaultTheme, ThemeProvider, Appbar, Fab, Screen} from "@nadha/views";
import {configureStore} from "@nadha/core";
import Navigation from "./navigation";
import {Provider} from "react-redux";
// @ts-ignore
import {PersistGate} from "redux-persist/integration/react";

const {store, persistor} = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<Text>Loading</Text>} persistor={persistor}>
                <ThemeProvider theme={DefaultTheme}>
                    <SafeAreaView style={{flex: 1}}>
                        <Screen>
                            <Navigation/>
                        </Screen>
                    </SafeAreaView>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
