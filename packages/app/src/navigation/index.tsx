import * as React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { enableScreens } from "react-native-screens";
import { Library } from "../pages/Home/Library";
import { Player } from "../pages/Player";
import { Folder } from "../pages/Home/Folder";
import { Breadcrumb } from "@nadha/views";

enableScreens();
const FolderHeader = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const { folderName } = route.params;
  return (
    <Breadcrumb
      routes={["Library", folderName ? folderName : "Folder"]}
      navigate={(route: string) => navigation.navigate(route)}
    />
  );
};

const RootStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
export function Landing() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Library"
        component={Library}
        // options={({ navigation }: { navigation: any }) => ({

        //   header: () => <Breadcrumb routes={['Library']} navigate={(route: string) => navigation.navigate(route)} />
        // })}
      />
      <HomeStack.Screen
        name="Folder"
        component={Folder}
        // options={({ navigation, route }) => ({
        //   header: () => <FolderHeader navigation={navigation} route={route} />
        // })}
      />
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
