import React from 'react';
import Svg, {G, Path, Rect} from "react-native-svg";

const Player = () => {
    return (
        <Svg viewBox="0 0 24 24">
            <G data-name="Layer 2">
                <G data-name="play-circle">
                    <Rect width="24" height="24" opacity="0"/>
                    <Path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
                    <Path
                        d="M12.34 7.45a1.7 1.7 0 0 0-1.85-.3 1.6 1.6 0 0 0-1 1.48v6.74a1.6 1.6 0 0 0 1 1.48 1.68 1.68 0 0 0 .69.15 1.74 1.74 0 0 0 1.16-.45L16 13.18a1.6 1.6 0 0 0 0-2.36zm-.84 7.15V9.4l2.81 2.6z"/>
                </G>
            </G>
        </Svg>
    )
}

export default Player;