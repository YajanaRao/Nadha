import React from "react";
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
      <Container>
        <Text>{integration.title}</Text>
      </Container>
    </Screen>
  );
}
