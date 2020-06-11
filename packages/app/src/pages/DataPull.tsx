import React from 'react';
import {Button, Card, Container, Icon, Screen, Text} from "@nadha/views";

import {useNavigation} from "@react-navigation/native";
import {FlatList} from "react-native";

export const DataPull = () => {
    const navigation = useNavigation();
    return (
        <Screen>
            <Container>
                <Icon name={"Close"} onPress={() => navigation.goBack()}/>
            </Container>
            <Container>
                <Text>List of integrations</Text>
                <FlatList data={[{title: "Dropbox"}, {title: "Google Drive"}, {title: 'Spotify'}]}
                          numColumns={2}
                          renderItem={({item}) => <Card style={{flex: 1}}><Text>{item.title}</Text></Card>}/>
                <Button onPress={() => navigation.goBack()} title={"Go Back"}/>
            </Container>
        </Screen>
    )
}
