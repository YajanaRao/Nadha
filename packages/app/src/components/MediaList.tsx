import React from 'react';
import {Container, List} from "@nadha/views";
import {FlatList} from "react-native";


export const MediaList = ({media, onItemPress}: { media: any, onItemPress: (item: any) => void }) => {
    return (
        <Container style={{justifyContent: 'center', alignItems: 'center', flex: 1, padding: 4}}>
            <FlatList
                style={{width: '100%', margin: 4}}
                contentContainerStyle={{margin: 8}}
                data={media}
                renderItem={({item}) => (
                    <List icon={item.type} title={item.title} description={item.subtitle}
                          onPress={() => onItemPress(item)}/>
                )}
                keyExtractor={(item: any) => item.nid}
            />
        </Container>
    )
}