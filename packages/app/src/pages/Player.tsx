import React from 'react';
import {Button, Container, Icon, Screen, Text} from '@nadha/views';
import {useNavigation} from "@react-navigation/native";
import {Image} from "react-native";

export const Player = () => {
    const navigation = useNavigation();
    return (
        <Screen>
            <Container>
                <Icon name={"Close"} onPress={() => navigation.goBack()}/>
            </Container>
            <Container style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>

                <Container style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        style={{height: 200, width: 200}}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                </Container>
                <Container style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name={"SkipBack"} size={40}/>
                    <Icon name={"Play"} size={60}/>
                    <Icon name={"SkipForward"} size={40}/>
                </Container>
                <Container style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>Song title</Text>
                    <Text>Song description</Text>
                </Container>
                <Button onPress={() => navigation.goBack()} title={"Go back"}/>
            </Container>
        </Screen>
    )
}