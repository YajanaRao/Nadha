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
import { SafeAreaView, StyleSheet, ScrollView, Text } from "react-native";
import { Provider } from "react-redux";
import {
  Screen,
  Welcome,
  DefaultTheme,
  Button,
  Container,
  ThemeProvider,
} from "@nadha/views";
import configureStore from "@nadha/core/store";

const { store, persistor } = configureStore();

const App = () => {
  console.log(DefaultTheme);
  return (
    <Provider store={store}>
      <ThemeProvider theme={DefaultTheme}>
        <SafeAreaView>
          <ScrollView
            // contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            <Screen>
              {/*<MobileApp/>*/}
              <Welcome />
              <Container style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.tsx</Text> to change
                  this screen and then come back to see your edits.
                </Text>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionTitle}>Debug</Text>
              </Container>

              <Container style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Button onPress={() => console.log("clicked")}>
                  Get started
                </Button>
              </Container>
            </Screen>
          </ScrollView>
        </SafeAreaView>
      </ThemeProvider>
    </Provider>
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

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000000",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: "black",
  },
  highlight: {
    fontWeight: "700",
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
