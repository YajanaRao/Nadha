import React, {useContext} from 'react';
import {Button, Container, Icon, Screen, Text} from '@nadha/views';
import {PlayerContext} from "@nadha/core";
import {useNavigation} from "@react-navigation/native";
import {Image} from "react-native";

export const Player = () => {
    const {current, send} = useContext(PlayerContext);
    const {context: {media}} = current;
    console.log(media);
    const navigation = useNavigation();
    return (
        <Screen>
            <Container>
                <Icon name={"Close"} onPress={() => navigation.goBack()}/>
            </Container>
            <Container style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Container style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        style={{height: 200, width: 200, borderRadius: 4, backgroundColor: "gray"}}
                        source={{
                            uri: media.artwork,
                        }}
                    />
                </Container>
                <Container style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name={"SkipBack"} size={40}/>
                    <Icon name={current.matches("play") ? "Pause" : "Play"} onPress={() => send('TOGGLE')}
                          size={60}/>
                    <Icon name={"SkipForward"} size={40}/>
                </Container>
                <Container style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>{media.title}</Text>
                    <Text>{media.subtitle}</Text>
                </Container>
                <Button onPress={() => navigation.goBack()} title={"Go back"}/>
            </Container>
        </Screen>
    )
}