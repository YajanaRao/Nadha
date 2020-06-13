import * as React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { enableScreens } from "react-native-screens";
import { Library } from '../pages/Home/Library';
import { Player } from '../pages/Player';
import { Folder } from '../pages/Home/Folder';
import { Breadcrumb } from "@nadha/views";
import {DataPull} from "../pages/DataPull";


enableScreens();
const RootStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
export function Landing() {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <HomeStack.Screen
                name="Library"
                component={Library}
            />
            <HomeStack.Screen
                name="Folder"
                component={Folder}

            />
        </HomeStack.Navigator>
    )
}

export function Root() {
    return (
        <RootStack.Navigator
            initialRouteName={"Landing"}
            screenOptions={{
                headerShown: false,
            }}
        >
            <RootStack.Screen
                name="Landing"
                component={Landing}
            />
            <RootStack.Screen
                name="Player"
                component={Player}
            />
            <RootStack.Screen
                name="DataPull"
                component={DataPull}
            />
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