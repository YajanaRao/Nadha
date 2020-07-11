import React, { useContext } from "react";
import { Container, List, Text } from "@nadha/views";
import { FlatList } from "react-native";
import { PlayerContext } from "@nadha/core";

const MediaItem = ({
  media,
  onSelect,
}: {
  media: any;
  onSelect: (media: any) => void;
}) => {
  const {
    current: { context },
  } = useContext(PlayerContext);
  const isActive =
    media.type !== "Folder" ? context.media.nid === media.nid : false;
  const subtitle = media.subtitle || media.artist;
  return (
    <List
      icon={media.type}
      title={media.title}
      description={subtitle}
      onPress={() => onSelect(media)}
      active={isActive}
    />
  );
};

export const MediaList = ({
  media,
  onMediaSelect,
}: {
  media: any;
  onMediaSelect: (media: any) => void;
}) => {
  return (
    <Container style={{ justifyContent: "center", flex: 1, padding: 4 }}>
      <FlatList
        style={{ margin: 4 }}
        contentContainerStyle={{ margin: 8 }}
        ListEmptyComponent={<Text>Nothing found here</Text>}
        data={media}
        renderItem={({ item }) => (
          <MediaItem media={item} onSelect={onMediaSelect} />
        )}
        keyExtractor={(item: any) => item.nid}
      />
    </Container>
  );
};
