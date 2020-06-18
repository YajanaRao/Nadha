import React, {createContext, ReactNode, useReducer} from "react";
import {ThemeProvider as EmotionProvider} from "emotion-theming";

export const DefaultTheme = {
    name: 'Default White',
    dark: false,
    roundness: 4,
    border: 0,
    colors: {
        background: "#f1f3f4",
        surface: "#fff",
        primary: "#0070f3",
        text: "#111",
    },
};

export const DarkTheme = {
    name: 'Default Dark',
    dark: true,
    roundness: 4,
    border: 0.005,
    colors: {
        background: "#212121",
        surface: "#272d34",
        primary: "#0070f3",
        text: "#fff",
    },
};

const initialState: any = DefaultTheme;
const store = createContext(initialState);
const {Provider} = store;

const ThemeProvider = ({children}: { children: ReactNode }) => {
    const [state, dispatch] = useReducer((state: any, action: any) => {
        switch (action.theme) {
            case 'Default White':
                return DarkTheme;
            default:
                return DefaultTheme;
        }
    }, initialState);

    return <Provider value={{state, dispatch}}>
        <EmotionProvider theme={state}>
            {children}
        </EmotionProvider>
    </Provider>;
};

export {store, ThemeProvider}