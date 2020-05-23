import React from 'react';
// import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconButton } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import { OfflineStack } from './offline';
import { SearchStack } from './search';
import { HomeStack } from './home';
import { ExploreStack } from './explore';
import { PlayerScreen } from './shared/Player';
import { Screen } from '../components/Screen';

import NotificationContainer from '../containers/NotificationContainer';
import { BottomTabBar } from '../components/BottomTabBar';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <IconButton
              key="home"
              icon="home"
              color={color}
              style={{ margin: 0, padding: 0 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({ color }) => (
            <IconButton
              icon="magnify"
              color={color}
              style={{ margin: 0, padding: 0 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStack}
        options={{
          tabBarIcon: ({ color }) => (
            <IconButton
              icon="compass"
              color={color}
              style={{ margin: 0, padding: 0 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Offline"
        component={OfflineStack}
        options={{
          tabBarIcon: ({ color }) => (
            <IconButton
              icon="library-music"
              color={color}
              style={{ margin: 0, padding: 0 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootStack = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={BottomNavigator} />
      <Stack.Screen name="Player" component={PlayerScreen} />
    </Stack.Navigator>
  );
};

export const RootScreen = () => {
  return (
    <Screen>
      <NotificationContainer />
      <RootStack />
    </Screen>
  );
};
