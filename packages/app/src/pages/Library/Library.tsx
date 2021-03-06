import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Breadcrumb, Card, Container, Link, Screen, Text } from "@nadha/views";
import { MediaManager } from "@nadha/core";
import { useDispatch, useSelector } from "react-redux";
import { MediaList } from "../../components/MediaList";
import { Toolbox } from "../../components/Toolbox";

export function Library() {
  const songs = useSelector((state: any) => state.mediaStore.media);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MediaManager.getMedia());
  }, [dispatch]);

  const navigate = (media: any) => {
    if (media.type === "Folder") {
      navigation.navigate("Folder", {
        folderId: media.nid,
        folderName: media.title,
        children: media.children,
      });
    } else {
      navigation.navigate("Player");
    }
  };

  return (
    <Screen>
      <Breadcrumb
        routes={["Library"]}
        navigate={(route: string) => navigation.navigate(route)}
      />
      <Container>
        <Card style={{ backgroundColor: "#ffe564" }}>
          <Text
            style={{
              fontSize: 24,
              marginBottom: 2,
              fontWeight: "700",
              color: "black",
            }}
          >
            Hi everyone!
          </Text>
          <Text style={{ color: "black" }}>
            Hi everyone! The application is in development. The developers are
            working to make this great. You can checkout the development and
            code at
            <Link url={"https://github.com/YajanaRao/Nadha"}>
              https://github.com/YajanaRao/Nadha
            </Link>
            . If you find any issues or like to see a new feature? Feel free a
            create a new issue. Thanks!
          </Text>
        </Card>
      </Container>
      <MediaList media={songs} onMediaSelect={navigate} />
      <Toolbox navigation={navigation} />
    </Screen>
  );
}
