import React from "react";
import { WebView } from "react-native-webview";
import { Container, Icon, Screen, Text } from "@nadha/views";

export interface OAuthProps {
  navigation: any;
  route: any;
}

export function OAuth({ navigation, route }: OAuthProps) {
  const { integration } = route.params;
  return (
    <Screen>
      <Container>
        <Icon name={"Close"} onPress={() => navigation.goBack()} />
      </Container>
      <Text>{integration.title}</Text>
      <WebView source={{ uri: "https://infinite.red" }} />
    </Screen>
  );
}
