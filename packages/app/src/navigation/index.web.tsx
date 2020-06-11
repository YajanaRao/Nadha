import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Library } from "../pages/Home/Library";
import { Player } from "../pages/Player";
import { Breadcrumb } from "@nadha/views";
import { Folder } from "../pages/Home/Folder";

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

const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();
export function Landing() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Library"
        component={Library}
        options={({ navigation }) => ({
          header: () => (
            <Breadcrumb
              routes={["Library"]}
              navigate={(route: string) => navigation.navigate(route)}
            />
          ),
        })}
      />
      <HomeStack.Screen
        name="Folder"
        component={Folder}
        options={({ navigation, route }) => ({
          header: () => <FolderHeader navigation={navigation} route={route} />,
        })}
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
