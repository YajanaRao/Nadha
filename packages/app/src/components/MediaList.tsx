import React, {useContext} from 'react';
import {Container, List} from "@nadha/views";
import {FlatList} from "react-native";
import {PlayerContext} from "@nadha/core";

const MediaItem = ({media, onSelect}: { media: any, onSelect: (media: any) => void }) => {
    const {current: {context}} = useContext(PlayerContext);
    return (
        <List icon={media.type} title={media.title}
              description={media.subtitle}
              onPress={() => onSelect(media)}
              active={context.media.nid === media.nid}
        />
    )
}

export const MediaList = ({media, onMediaSelect}: { media: any, onMediaSelect: (media: any) => void }) => {
    return (
        <Container style={{justifyContent: 'center', alignItems: 'center', flex: 1, padding: 4}}>
            <FlatList
                style={{width: '100%', margin: 4}}
                contentContainerStyle={{margin: 8}}
                data={media}
                renderItem={({item}) => (
                    <MediaItem media={item} onSelect={onMediaSelect}/>
                )}
                keyExtractor={(item: any) => item.nid}
            />
        </Container>
    )
}