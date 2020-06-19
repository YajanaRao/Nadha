// import MediaPlayer from 'react-native-media-player';
import { DeviceEventEmitter, EmitterSubscription } from 'react-native';
import {log} from "@nadha/utils";
import {useContext} from "react";
import {PlayerContext} from "../../";

let subscription: EmitterSubscription;

export function setup(){
    const {send} = useContext(PlayerContext);
    subscription = DeviceEventEmitter.addListener('media', event => {
        // handle event
        log.debug(`from event listener: ${event}`);
        if (event === 'skip_to_next') {
            log.debug("clicked on skip to next");
        } else if (event === 'skip_to_previous') {
            log.debug("clicked on skip to next");
        } else if (event === 'complete'){
            send('COMPLETE');
        } else {
            send('TOGGLE');
        }
    });
}

export function destroy(){
    // MediaPlayer.destroy();
    subscription.remove();
}
