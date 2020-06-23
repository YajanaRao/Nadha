import React, { createContext, ReactNode, useContext, useEffect } from "react";
import { playerMachine } from "./playerMachine";
import { useMachine } from "@xstate/react";
import { DeviceEventEmitter, EmitterSubscription } from "react-native";

const PlayerContext = createContext<any>(null);

const { Provider } = PlayerContext;

export function usePlayerContext(): any {
    return useContext(PlayerContext);
}

let subscription: EmitterSubscription;

const PlayerContextProvider = ({ children }: { children: ReactNode }) => {
    const [current, send] = useMachine(playerMachine);

    useEffect(() => {
        subscription = DeviceEventEmitter.addListener('media', event => {
            // handle event
            // log.debug(`from event listener: ${event}`);
            if (event === 'skip_to_next') {
                send('COMPLETE');
            } else if (event === 'skip_to_previous') {
                send('COMPLETE');
            } else if (event === 'paused') {
                if (!current.matches("pause")) {
                    send('PAUSE');
                }
            } else if (event === "playing") {
                if (!current.matches("play")) {
                    send("PLAY");
                }
            }
        });
        return () => subscription.remove();
    });

    return (<Provider value={{ current, send }}>
        {children}
    </Provider>);
};

export { PlayerContext, PlayerContextProvider }