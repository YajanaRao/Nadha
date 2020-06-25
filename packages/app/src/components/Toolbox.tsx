import React from 'react';
import { Fab, Snackbar } from "@nadha/views";
import { usePlayerContext } from '@nadha/core';

export const Toolbox = ({ navigation }: { navigation: any }) => {
    const { current, send } = usePlayerContext();
    const isPlaying = current.matches("play");
    const subtitle = current.context.media.subtitle || current.context.media.artist;

    const togglePlayer = () => {
        if (isPlaying) {
            send("PAUSE");
        } else {
            send("PLAY");
        }
    }
    return (
        <React.Fragment>
            {
                current.matches("idle") ? false : <Snackbar
                    onPress={() => navigation.navigate("Player")}
                    icon={{
                        name: isPlaying ? "Pause" : "Play",
                        onPress: () => togglePlayer()
                    }}
                    title={current.context.media.title}
                    subtitle={subtitle}
                />
            }
            <Fab
                style={{ position: "absolute", bottom: 10, right: 10 }}
                onPress={() => navigation.navigate("DataPull")}
            />
        </React.Fragment>

    )
}