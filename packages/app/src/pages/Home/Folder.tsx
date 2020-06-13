import React from 'react';
import {Appbar, Breadcrumb, Container, Fab, List, Screen} from '@nadha/views';
import {useNavigation, useRoute} from "@react-navigation/native";
import {Dimensions, FlatList} from "react-native";
import {MediaList} from "../../components/MediaList";

const SCREEN_HEIGHT = Dimensions.get("window").height;

const FolderHeader = ({route, navigation}: { route: any, navigation: any }) => {
    const {folderName} = route.params;
    return <Breadcrumb routes={['Library', folderName ? folderName : 'Folder']}
                       navigate={(route: string) => navigation.navigate(route)}/>
}
export const Folder = () => {
    const navigation = useNavigation();
    const route: any = useRoute();
    const {folderName, children} = route.params;

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
            <FolderHeader navigation={navigation} route={route}/>
            <MediaList media={children} onItemPress={navigate} />
            <Fab
                style={{position: "absolute", top: SCREEN_HEIGHT - 80, right: 10}}
                onPress={() => navigation.navigate("DataPull")}
            />
        </Screen>
    )
}