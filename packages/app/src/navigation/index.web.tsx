import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Library } from "../pages/Library";
import { Player } from "../pages/Player";
import { Folder } from "../pages/Folder";
import { OAuth } from "../pages/OAuth";
import { DataPull } from "../pages/DataPull";

const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();

export function Landing() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Library" component={Library} />
      <HomeStack.Screen name="Folder" component={Folder} />
    </HomeStack.Navigator>
  );
}

export function Root() {
  return (
    <RootStack.Navigator
      initialRouteName={"Landing"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="Landing" component={Landing} />
      <RootStack.Screen name="Player" component={Player} />
      <RootStack.Screen name="DataPull" component={DataPull} />
      <RootStack.Screen name="OAuth" component={OAuth} />
    </RootStack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
