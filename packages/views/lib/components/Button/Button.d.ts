import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  onPress?: () => void;
}
export declare const Button: ({
  children,
  style,
  onPress,
}: Props) => JSX.Element;
export {};
