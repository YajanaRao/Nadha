import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Screen, Container, List, Card, Text } from "@nadha/views";
import { MediaManager, useSelector, useDispatch } from "@nadha/core";

export function Library() {
  const songs = useSelector((state: any) => state.mediaStore.songs);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MediaManager.getAllSongs());
  }, []);

  return (
    <Screen>
      <Container>
        <Card>
          <Text style={{ fontSize: 24, marginBottom: 2, fontWeight: "700" }}>
            Hi everyone!
          </Text>
          <Text>
            Hi everyone! Seems like there hasn't been much going on in this
            issue lately. If there are still questions, comments, or bugs,
            please feel free to continue the discussion. Unfortunately, we don't
            have time to get to every issue. We are always open to contributions
            so please send us a pull request if you would like to help. Inactive
            issues will be closed after 30 days. Thanks!
          </Text>
        </Card>
      </Container>
      <Container>
        <List
          title={"Music"}
          description={"20 songs"}
          icon="Folder"
          onPress={() =>
            navigation.navigate("Folder", {
              folderId: 1,
              folderName: "Music",
            })
          }
        />
        <List
          title={"Kannada songs"}
          description={"32 songs"}
          icon="Folder"
          onPress={() =>
            navigation.navigate("Folder", {
              folderId: 2,
              folderName: "Kannada songs",
            })
          }
        />
      </Container>
      <Container>
        <FlatList
          data={songs}
          renderItem={({ item }) => (
            <List
              title={item.title}
              description={item.artist}
              onPress={() => navigation.navigate("Player")}
            />
          )}
          keyExtractor={(item: any) => item.nid}
        />
      </Container>
    </Screen>
  );
}
