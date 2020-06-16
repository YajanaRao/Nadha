import React from 'react';
import {Appbar, Breadcrumb, Screen} from '@nadha/views';
import {useNavigation, useRoute} from "@react-navigation/native";
import {MediaList} from "../../components/MediaList";
import {Toolbox} from "../../components/Toolbox";
import {PlayerContext} from '@nadha/core';

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
            <PlayerContext.Consumer>
                {({send}) => (
                    <MediaList media={children} onItemPress={(media) => send('SELECT', {media})}/>
                )}
            </PlayerContext.Consumer>
            <Toolbox navigation={navigation}/>
        </Screen>
    )
}