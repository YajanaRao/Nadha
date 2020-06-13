import React from "react";
import {useTheme} from "emotion-theming";
import {StyleProp, TouchableOpacity, ViewStyle, Text} from "react-native";
import {Theme} from "../../types";

const Color = require("color");

interface Props {
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
    title: string;
}

const BUTTON: ViewStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderColor: 'transparent',
    borderWidth: 1,
    minWidth: 70,
};

export const Button = ({style, onPress, title}: Props) => {
    const theme: Theme = useTheme();
    const {
        roundness,
        colors: {primary, text},
    } = theme;

    const color = Color(primary);
    const textColor = color.isDark() ? "white" : "black";

    return (
        <TouchableOpacity style={[
            BUTTON,
            {
                backgroundColor: primary,
                borderRadius: roundness,
                shadowColor: text,
            },
            style,
        ]} onPress={onPress}><Text style={{
            color: textColor,
            fontWeight: '500',
            fontSize: 12,
            textTransform: "uppercase",
            flex: 1
        }}>{title}</Text></TouchableOpacity>
    );
};
