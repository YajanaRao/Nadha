import React from 'react';
import {TouchableOpacity} from "react-native";
import {Card, Icon, Text, Theme} from "../../";
import {useTheme} from "emotion-theming";

export interface Props {
    icon: {
        name: string;
        onPress: () => void;
    },
    onPress: () => void;
    title: string;
    subtitle?: string;
}

export const Snackbar = ({icon, onPress, title, subtitle}: Props) => {
    const theme: Theme = useTheme();
    const backgroundColor = theme.dark ? "white" : "rgb(50, 50, 50)";
    const textColor = theme.dark ? "black" : "white";
    return (
        <Card style={{
            position: "absolute",
            bottom: 10,
            left: 10,
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            backgroundColor,
        }}>
            <Icon name={icon.name} onPress={icon.onPress} color={textColor}/>
            <TouchableOpacity style={{marginHorizontal: 16, justifyContent: 'center', alignItems: 'center'}}
                              onPress={onPress}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: textColor
                }}>{title}</Text>
                {subtitle ? <Text>{subtitle}</Text> : false}
            </TouchableOpacity>
        </Card>
    );
};