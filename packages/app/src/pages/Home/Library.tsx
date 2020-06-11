import React, {useEffect} from "react";
import {Dimensions} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Appbar, Breadcrumb, Card, Container, Fab, Screen, Text} from "@nadha/views";
import {MediaManager,} from "@nadha/core";
import {useDispatch, useSelector} from 'react-redux';
import {MediaList} from "../../components/MediaList";

const SCREEN_HEIGHT = Dimensions.get('window').height;

export function Library() {
    const songs = useSelector((state: any) => state.mediaStore.songs);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(MediaManager.getAllMedia())
    }, []);

    const navigate = (media: any) => {
        if (media.type === "Folder") {
            navigation.navigate("Folder", {
                folderId: media.nid,
                folderName: media.title,
                children: media.children
            })
        } else {
            navigation.navigate("Player")
        }
    }

    return (
        <Screen>
            <Appbar/>
            <Breadcrumb routes={['Library']} navigate={(route: string) => navigation.navigate(route)}/>
            <Container>
                <Card>
                    <Text style={{fontSize: 24, marginBottom: 2, fontWeight: "700"}}>
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
            <MediaList media={songs} onItemPress={navigate}/>
            <Fab
                style={{position: "absolute", top: SCREEN_HEIGHT - 80, right: 10}}
                onPress={() => navigation.navigate("DataPull")}
            />
        </Screen>
    );
}
