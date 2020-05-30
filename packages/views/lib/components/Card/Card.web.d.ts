import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}
export declare const Card: ({ children, style }: Props) => JSX.Element;
export {};
