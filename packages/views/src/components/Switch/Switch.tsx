import React from 'react';
import { Switch as NativeSwitch } from "react-native";
import { useTheme } from '../../theme';
import { Theme } from '../../'

export interface Props {
    value: boolean;
    onValueChange: () => void;
}

export const Switch = ({ value, onValueChange }: Props) => {
    const theme: Theme = useTheme();
    const { colors: { primary } } = theme;
    return <NativeSwitch value={value} onValueChange={onValueChange} thumbColor={value ? primary : "#f4f3f4"} />
}