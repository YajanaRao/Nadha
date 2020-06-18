import React from "react";
import { useTheme } from "../../theme";
import { StyleProp, TouchableOpacity, ViewStyle, Text } from "react-native";
import { Theme } from "../../types";

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
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderWidth: 1,
    minWidth: 70,
    minHeight: 40,
};

export const Button = ({ style, onPress, title }: Props) => {
    const theme: Theme = useTheme();
    const {
        roundness,
        colors: { primary, text },
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
                borderColor: primary,
            },
            style,
        ]} onPress={onPress}><Text style={{
            color: textColor,
            fontWeight: '500',
            fontSize: 12,
            textTransform: "uppercase",
        }}>{title}</Text></TouchableOpacity>
    );
};
