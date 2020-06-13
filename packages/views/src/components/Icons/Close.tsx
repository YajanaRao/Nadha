import React from "react";
import Svg, {G, Path, Rect} from "react-native-svg";

const Close = ({color, variant}: { color: string, variant: string }) => {
    return (
        <Svg viewBox="0 0 24 24">
            <G data-name="Layer 2" fill={color}>
                <G data-name="close">
                    <Rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/>
                    <Path
                        d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/>
                </G>
            </G>
        </Svg>
    )
}

export default Close;