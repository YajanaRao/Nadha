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
import {SafeAreaView, Text, Dimensions, View, ActivityIndicator} from "react-native";
import {DefaultTheme, ThemeProvider, Appbar, Fab, Screen} from "@nadha/views";
import {configureStore} from "@nadha/core";
import Navigation from "./navigation";
import {Provider} from "react-redux";
// @ts-ignore
import {PersistGate} from "redux-persist/integration/react";
import ErrorBoundary from "./components/ErrorBoundary";


const {store, persistor} = configureStore();

const Loader = () => (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size={"large"}/>
    </View>
);

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<Loader/>} persistor={persistor}>
                <ThemeProvider theme={DefaultTheme}>
                    <ErrorBoundary>
                        <SafeAreaView style={{flex: 1}}>
                            <Screen>
                                <Navigation/>
                            </Screen>
                        </SafeAreaView>
                    </ErrorBoundary>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
