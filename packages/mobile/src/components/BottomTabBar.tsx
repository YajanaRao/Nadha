import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Caption, TouchableRipple, Surface, Divider, useTheme } from 'react-native-paper';
import { PlayerBarContainer } from '../containers/PlayerBarContainer';
import { NavigationState } from '@react-navigation/core';


export const BottomTabBar = ({
  descriptors,
  navigation,
  state
}) => {
  const { routes, index } = state;
  const theme = useTheme();
  const { colors } = theme;
  return (
    <Surface style={{ elevation: 4 }}>
      <PlayerBarContainer />
      <Divider />
      <Surface style={[styles.container]}>
        {routes.map((route: NavigationState, routeIndex: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === routeIndex;
          const color = isFocused ? colors.primary : colors.text



          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });


            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          // const color = isRouteActive ? "green" : "red";
          return (
            <TouchableRipple
              key={route.key}
              style={styles.tabButton}
              // rippleColor={colors.primary}
              // underlayColor={colors.primary}
              borderless
              onPress={onPress}
              onLongPress={onLongPress}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
            >
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {options.tabBarIcon({ color: color })}
                <Caption
                  style={{
                    textAlign: 'center',
                    fontSize: 10,
                    margin: 0,
                    padding: 0,
                    color
                  }}>
                  {label}
                </Caption>
              </View>
            </TouchableRipple>
          );
        })}
      </Surface>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 4,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  },
});
