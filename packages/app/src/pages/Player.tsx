import React from 'react';
import { Container, Screen, Text, Button } from '@nadha/views';
import { useNavigation } from "@react-navigation/native";

export const Player = () => {
    const navigation = useNavigation();
    return (
        <Screen>
            <Container>
                <Text>Player</Text>
                <Button onPress={() => navigation.goBack()}>
                    <Text>Go back</Text>
                </Button>
            </Container>
        </Screen>
    )
}