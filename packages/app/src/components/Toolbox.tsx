import React from 'react';
import {Fab, Snackbar} from "@nadha/views";
import {PlayerContext} from '@nadha/core';

export const Toolbox = ({navigation}: { navigation: any }) => {
    return (
        <React.Fragment>
            <PlayerContext.Consumer>
                {({current, send}) => (
                    current.matches("idle") ? false : <Snackbar
                        onPress={() => navigation.navigate("Player")}
                        icon={{
                            name: current.matches("play") ? "Pause" : "Play",
                            onPress: () => send('TOGGLE')
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