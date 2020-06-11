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
import { SafeAreaView, Text, Dimensions } from "react-native";
import { DefaultTheme, ThemeProvider, Appbar, Fab, Screen } from "@nadha/views";

import { configureStore, Provider, PersistGate } from "@nadha/core";
import Navigation from "./navigation";

const { store, persistor } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading</Text>} persistor={persistor}>
        <ThemeProvider theme={DefaultTheme}>
          <SafeAreaView>
            <Appbar />
            <Screen>
              <Navigation />
            </Screen>
            <Fab
              style={{
                position: "absolute",
                bottom: 10,
                right: 10,
                top: Dimensions.get("window").height - 80,
              }}
              onPress={() => console.log("supposed to open modal")}
            />
          </SafeAreaView>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
