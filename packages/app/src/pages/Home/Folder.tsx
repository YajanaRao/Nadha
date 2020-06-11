import React from "react";
import { Container, Screen, Text, Button } from "@nadha/views";
import { useNavigation, useRoute } from "@react-navigation/native";

export const Folder = () => {
  const navigation = useNavigation();
  const route: any = useRoute();
  const { folderName } = route.params;
  return (
    <Screen>
      <Container>
        <Text>{folderName}</Text>
        <Button onPress={() => navigation.goBack()}>
          <Text>Go back</Text>
        </Button>
      </Container>
    </Screen>
  );
};
