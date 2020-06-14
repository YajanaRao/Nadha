import React from 'react';
import Svg, {G, Path, Rect} from "react-native-svg";

const Pause = () => {
    return (
        <Svg viewBox="0 0 24 24">
            <G data-name="Layer 2">
                <G data-name="pause-circle">
                    <Rect width="24" height="24" opacity="0"/>
                    <Path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
                    <Path d="M15 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/>
                    <Path d="M9 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/>
                </G>
            </G>
        </Svg>
    )
}

export default Pause;