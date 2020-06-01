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
import { SafeAreaView } from "react-native";
import { DefaultTheme, ThemeProvider, DarkTheme } from "@nadha/views";
import { Home } from "./pages/Home";

// import configureStore from "@nadha/core/store";

// const { store, persistor } = configureStore();

const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
