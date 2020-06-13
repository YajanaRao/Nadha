import React from 'react';
import {Container, List} from "@nadha/views";
import {FlatList} from "react-native";


export const MediaList = ({media, onItemPress}: { media: any, onItemPress: (item: any) => void }) => {
    return (
        <Container style={{justifyContent: 'center', alignItems: 'center'}}>
            <FlatList
                style={{width: '100%'}}
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