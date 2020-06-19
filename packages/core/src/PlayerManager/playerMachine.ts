import {assign, Machine} from "xstate";
import {MediaPlayer} from 'react-native-media-player';


interface PlayerContext {
    media: {
        nid: string;
        title: string;
        subtitle: string;
    };
}


export const playerMachine = Machine<PlayerContext>({
    id: "toggle",
    initial: "idle",
    context: {
        media: {
            nid: "",
            title: "",
            subtitle: ""
        }
    },
    states: {
        idle: {
            id: 'setup',
            on: {SELECT: "loading"}
        },
        loading: {
            invoke: {
                id: 'loadMedia',
                src: (context, event) => MediaPlayer.load(event.media.url).then(() => event.media),
                onDone: {
                    target: 'pause',
                    actions: assign({
                        media: (_, event) => event.data
                    })
                },
                onError: 'idle'
            },
            on: {TOGGLE: "play", SELECT: "loading"}
        },
        play: {
            invoke: {
                id: 'play',
                src: () => MediaPlayer.play(),
            },
            on: {TOGGLE: "pause", SELECT: "loading"}
        },
        pause: {
            invoke: {
                id: 'pause',
                src: () => MediaPlayer.pause(),
            },
            on: {TOGGLE: "play", SELECT: "loading", COMPLETE: "idle"}
        },
    }
});