import React from 'react';
import { TouchableOpacity } from 'react-native';

export class Hoverable extends React.Component<any, any> {
    setStyles = (styles: any) => {
        // @ts-ignore
        this.root.setNativeProps({
            style: styles,
        });
    };

    render() {
        const { onHover, style, ...passThrough } = this.props;
        return (
            <TouchableOpacity
                ref={(component) => {
                    // @ts-ignore
                    this.root = component;
                }}
                // @ts-ignore
                onMouseEnter={() => this.setStyles(onHover)}
                onMouseLeave={() => this.setStyles(style)}
                style={style}
                {...passThrough}
            />
        );
    }
}
