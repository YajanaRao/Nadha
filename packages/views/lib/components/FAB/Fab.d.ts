/// <reference types="react" />
import { StyleProp, ViewStyle } from "react-native";
interface Props {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}
export declare const Fab: ({ style, onPress }: Props) => JSX.Element;
export {};
