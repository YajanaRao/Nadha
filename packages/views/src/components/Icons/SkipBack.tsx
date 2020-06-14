import React from 'react';
import Svg, {G, Path, Rect} from "react-native-svg";

const SkipBack = () => {
    return (
        <Svg viewBox="0 0 24 24">
            <G data-name="Layer 2">
                <G data-name="skip-back">
                    <Rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/>
                    <Path
                        d="M16.45 6.2a2.1 2.1 0 0 0-2.21.26l-5.1 4.21-.14.15V7a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-3.82l.14.15 5.1 4.21a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59V7.79a1.76 1.76 0 0 0-1.05-1.59zM15.5 16l-4.82-4 4.82-3.91z"/>
                </G>
            </G>
        </Svg>
    );
};

export default SkipBack;