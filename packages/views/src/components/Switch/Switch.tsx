import React from "react";
import { Switch as NativeSwitch, Platform, NativeModules } from "react-native";
import { useTheme } from "../../theme";
import { Theme } from "../../types";

const setColor = require("color");

const version = NativeModules.PlatformConstants
  ? NativeModules.PlatformConstants.reactNativeVersion
  : undefined;

export interface SwitchProps {
  value: boolean;
  onValueChange: () => void;
  disabled?: boolean;
  color?: string;
}

export const Switch = ({
  value,
  onValueChange,
  disabled = false,
  color,
}: SwitchProps) => {
  const theme: Theme = useTheme();
  const checkedColor = color || theme.colors.accent;

  const onTintColor =
    Platform.OS === "ios"
      ? checkedColor
      : disabled
      ? theme.dark
        ? setColor("white").alpha(0.1).rgb().string()
        : setColor("black").alpha(0.12).rgb().string()
      : setColor(checkedColor).alpha(0.5).rgb().string();

  const thumbTintColor =
    Platform.OS === "ios"
      ? undefined
      : disabled
      ? theme.dark
        ? "#424242"
        : "#BDBDBD"
      : value
      ? checkedColor
      : theme.dark
      ? "#BDBDBD"
      : "#FAFAFA";

  const props =
    version && version.major === 0 && version.minor <= 56
      ? {
          onTintColor,
          thumbTintColor,
        }
      : {
          thumbColor: thumbTintColor,
          trackColor: {
            true: onTintColor,
            false: "",
          },
        };

  return (
    <NativeSwitch
      value={value}
      disabled={disabled}
      onValueChange={disabled ? undefined : onValueChange}
      ios_backgroundColor={onTintColor}
      {...props}
    />
  );
};
