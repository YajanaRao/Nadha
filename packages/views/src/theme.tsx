import React, { createContext, ReactNode, useReducer, useContext } from "react";
import { Appearance } from "react-native";
import { Theme } from "./types";

export const DefaultTheme = {
  name: "Default White",
  dark: false,
  roundness: 4,
  border: 0,
  colors: {
    background: "#fafafa",
    surface: "#fff",
    primary: "#4caf50",
    accent: "#ff9800",
    text: "rgba(0, 0, 0, 0.87)",
  },
};

// TODO: Standard theme
export const DarkTheme = {
  name: "Default Dark",
  dark: true,
  roundness: 4,
  border: 0,
  colors: {
    background: "#303030",
    surface: "#424242",
    primary: "#4caf50",
    accent: "#ff9800",
    text: "#fff",
  },
};
const colorScheme = Appearance.getColorScheme();

const initialTheme: any = colorScheme === "dark" ? DarkTheme : DefaultTheme;
const ThemeContext = createContext(initialTheme);
const { Provider } = ThemeContext;

export function useTheme(): Theme {
  return useContext(ThemeContext).state;
}

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer((state: any, action: any) => {
    switch (action.theme) {
      case "Default White":
        return DarkTheme;
      default:
        return DefaultTheme;
    }
  }, initialTheme);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { ThemeContext, ThemeProvider };
