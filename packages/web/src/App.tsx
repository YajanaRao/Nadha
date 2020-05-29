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
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Screen, DefaultTheme, ThemeProvider } from "@nadha/views";
import { Home } from "./pages/home";
// import configureStore from "@nadha/core/store";

// const { store, persistor } = configureStore();

const App = () => {
  console.log(DefaultTheme);
  return (
    <ThemeProvider theme={DefaultTheme}>
      <SafeAreaView>
        <ScrollView
          // contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Screen>
            <Home />
          </Screen>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#ff0fff",
    minHeight: "100%",
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  footer: {
    color: "black",
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
});

export default App;
