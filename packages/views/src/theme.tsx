import React, { createContext, ReactNode, useReducer, useContext } from "react";
import { Theme } from "./types";

export const DefaultTheme = {
  name: "Default White",
  dark: false,
  roundness: 4,
  border: 0,
  colors: {
    background: "#ecfbfc",
    surface: "#ffebd9",
    primary: "#235952",
    accent: "#ffc8bd",
    text: "#111",
  },
};

export const DarkTheme = {
  name: "Default Dark",
  dark: true,
  roundness: 4,
  border: 0,
  colors: {
    background: "#525252",
    surface: "#414141",
    primary: "#ca3e47",
    accent: "#313131",
    text: "#fff",
  },
};

const initialTheme: any = DefaultTheme;
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
