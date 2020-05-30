import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
export interface Screen {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}
export declare const Screen: ({ children, style }: Screen) => JSX.Element;
