import React, { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";
import { Screen, Container, List, Card, Appbar, Fab } from "@nadha/views";
// import { MediaManager } from '@nadha/core';

export function Home() {
  const [songs, setSongs] = useState([]);
  // useEffect(() => {
  //   let list: any = MediaManager.getSongs();
  //   console.log(list)
  //   // setSongs(list)
  // }, [])

  return (
    <Screen>
      <Appbar />
      <Container>
        <Card>
          <Text style={{ fontSize: 18, marginBottom: 2 }}>Hi everyone!</Text>
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
        <List title={"Music"} description={"20 songs"} icon="Folder" />
        <List title={"Kannada songs"} description={"32 songs"} icon="Folder" />
      </Container>
      <Container>
        <FlatList
          data={songs}
          renderItem={(song: any) => (
            <List title={song.title} description={song.artist} />
          )}
          keyExtractor={(item: any) => item.nid}
        />
      </Container>
      {/* <Fab style={{ position: "absolute", bottom: 10, right: 10 }} onPress={() => MediaManager.addSongs(songs)}/> */}
    </Screen>
  );
}
