import React from "react";
import { WebView } from "react-native-webview";
import { Screen } from "@nadha/views";

export interface OAuthProps {}

export function OAuth({}: OAuthProps) {
  return (
    <Screen>
      <WebView source={{ uri: "https://infinite.red" }} />
    </Screen>
  );
}
