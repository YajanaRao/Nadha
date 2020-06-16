import React, {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {Appbar, Breadcrumb, Card, Container, Link, Screen, Text} from "@nadha/views";
import {MediaManager,} from "@nadha/core";
import {useDispatch, useSelector} from 'react-redux';
import {MediaList} from "../../components/MediaList";
import {Toolbox} from "../../components/Toolbox";

export function Library() {
    const songs = useSelector((state: any) => state.mediaStore.media);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(MediaManager.getMedia());
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
                <Card style={{backgroundColor: '#ffe56433'}}>
                    <Text style={{fontSize: 24, marginBottom: 2, fontWeight: "700"}}>
                        Hi everyone!
                    </Text>
                    <Text>
                        Hi everyone! The application is in development. The developers are working to make this great.
                        You can checkout the development and code at <Link
                        url={"https://github.com/YajanaRao/Nadha"}><Text
                        style={{color: 'blue'}}>https://github.com/YajanaRao/Nadha</Text></Link>. If you find any issues
                        or
                        like to see a new feature? Feel free a create a new issue. Thanks!
                    </Text>
                </Card>
            </Container>
            <MediaList media={songs} onItemPress={navigate}/>
            <Toolbox navigation={navigation}/>
        </Screen>
    );
}
