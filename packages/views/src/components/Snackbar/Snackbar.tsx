import React from 'react';
import { TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import { Card } from '../Card';
import { Text } from "../Text/Text";
import { Icon } from "../Icons";
import { Theme } from "../../types";
import { useTheme } from "../../theme";

const Color = require("color");

const SNACK_CONTAINER: ViewStyle = {
    position: "absolute",
    bottom: 10,
    left: 10,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
}

const SNACK_PRESSABLE: ViewStyle = {
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center'
}

const SNACK_TITLE: TextStyle = {
    fontWeight: 'bold',
    fontSize: 16,
}

export interface Props {
    icon: {
        name: string;
        onPress: () => void;
    },
    onPress: () => void;
    title: string;
    subtitle?: string;
}

export const Snackbar = ({ icon, onPress, title, subtitle }: Props) => {
    const theme: Theme = useTheme();
    const backgroundColor = theme.dark ? "white" : "rgb(50, 50, 50)";
    const textColor = theme.dark ? "black" : "white";
    const descriptionColor = Color(textColor).alpha(0.54).rgb().string();
    return (
        <Card style={[SNACK_CONTAINER, { backgroundColor }]}>
            <Icon name={icon.name} onPress={icon.onPress} color={textColor} />
            <TouchableOpacity
                style={SNACK_PRESSABLE}
                onPress={onPress}>
                <Text style={[SNACK_TITLE, { color: textColor }]}>{title}</Text>
                {subtitle ? <Text style={{ color: descriptionColor }}>{subtitle}</Text> : false}
            </TouchableOpacity>
        </Card>
    );
};