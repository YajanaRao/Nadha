import React from 'react';
// import { createAppContainer } from "react-navigation";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconButton, useTheme} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';

import {OfflineStack} from './offline';
import {SearchStack} from './search';
import {HomeStack} from './home';
import {ExploreStack} from './explore';
import {PlayerScreen} from './shared/Player';
import {Screen} from '../components/Screen';

import NotificationContainer from '../containers/NotificationContainer';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomNavigator = () => {
  const theme = useTheme();
  const {colors} = theme;
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <IconButton
              icon="home"
              color={focused ? colors.primary : colors.surface}
              style={{margin: 0, padding: 0}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({focused}) => (
            <IconButton
              icon="magnify"
              color={focused ? colors.primary : colors.surface}
              style={{margin: 0, padding: 0}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStack}
        options={{
          tabBarIcon: ({focused}) => (
            <IconButton
              icon="compass"
              color={focused ? colors.primary : colors.surface}
              style={{margin: 0, padding: 0}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Offline"
        component={OfflineStack}
        options={{
          tabBarIcon: ({focused}) => (
            <IconButton
              icon="library-music"
              color={focused ? colors.primary : colors.surface}
              style={{margin: 0, padding: 0}}
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
