import React from 'react';
import {Fab, Snackbar} from "@nadha/views";
import {PlayerContext, usePlayerContext} from '@nadha/core';

export const Toolbox = ({navigation}: { navigation: any }) => {
    const {current, send} = usePlayerContext();
    const isPlaying = current.matches("play");

    const togglePlayer = () => {
        if (isPlaying) {
            send("PAUSE");
        } else {
            send("PLAY");
        }
    }
    return (
        <React.Fragment>
            <PlayerContext.Consumer>
                {({current, send}) => (
                    current.matches("idle") ? false : <Snackbar
                        onPress={() => navigation.navigate("Player")}
                        icon={{
                            name: isPlaying ? "Pause" : "Play",
                            onPress: () => togglePlayer()
                        }}
                        title={current.context.media.title}
                        subtitle={current.context.media.subtitle}
                    />
                )}
            </PlayerContext.Consumer>
            <Fab
                style={{position: "absolute", bottom: 10, right: 10}}
                onPress={() => navigation.navigate("DataPull")}
            />
        </React.Fragment>

    )
}