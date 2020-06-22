import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {enableScreens} from "react-native-screens";
import {Library} from '../pages/Home/Library';
import {Player} from '../pages/Player';
import {Folder} from '../pages/Home/Folder';
import {DataPull} from "../pages/DataPull";
import {SafeAreaProvider} from 'react-native-safe-area-context';


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
                stackPresentation: "modal"
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
        <SafeAreaProvider>
            <NavigationContainer>
                <Root/>
            </NavigationContainer>
        </SafeAreaProvider>

    );
}
