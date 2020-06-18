import {assign, Machine} from "xstate";

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
            on: {SELECT: "loading"}
        },
        loading: {
            entry: [
                assign({
                    media: (context, event) => event.media
                })
            ],
            on: {TOGGLE: "play", SELECT: "loading"}
        },
        play: {
            on: {TOGGLE: "pause", SELECT: "loading"}
        },
        pause: {
            on: {TOGGLE: "play", SELECT: "loading"}
        }
    }
});