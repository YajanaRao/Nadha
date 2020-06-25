import React, {ReactNode} from "react";
import {StyleProp, useWindowDimensions, View, ViewStyle} from "react-native";

interface Props {
    style?: StyleProp<ViewStyle>;
    children: ReactNode;
}

const CONTAINER: ViewStyle = {
    padding: 8,
    marginHorizontal: 'auto',
};

// Based on bootstrap standard
// https://getbootstrap.com/docs/4.4/layout/overview/

const screenWidthResolver = () => {
    const window = useWindowDimensions();
    let width: string | number;
    if (window.width >= 1200) {
        width = 1140;
    } else if (window.width >= 992) {
        width = 960;
    } else if (window.width >= 576) {
        width = 540;
    } else {
        width = '100%';
    }
    return width;
}


export const ResponsiveContainer = ({children, style}: Props) => {
    const maxWidth: string | number = screenWidthResolver();
    return <View style={[CONTAINER, style, {maxWidth}]}>{children}</View>;
};
