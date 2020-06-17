import React, {useContext} from 'react';
import {Breadcrumb, Screen} from '@nadha/views';
import {useNavigation, useRoute} from "@react-navigation/native";
import {MediaList} from "../../components/MediaList";
import {Toolbox} from "../../components/Toolbox";
import {PlayerContext} from "@nadha/core";
import Header from "../../components/Header";

const FolderHeader = ({route, navigation}: { route: any, navigation: any }) => {
    const {folderName} = route.params;
    return <Breadcrumb routes={['Library', folderName ? folderName : 'Folder']}
                       navigate={(route: string) => navigation.navigate(route)}/>
}
export const Folder = () => {
    const navigation = useNavigation();
    const route: any = useRoute();
    const {send} = useContext(PlayerContext);
    const {folderName, children} = route.params;

    const onMediaSelect = (media: any) => {
        if (media.type === "Folder") {
            navigation.navigate("Folder", {
                folderId: media.nid,
                folderName: media.title,
                children: media.children
            })
        } else {
            console.log(media);
            send('SELECT', {media});
        }
    }

    return (
        <Screen>
            <Header/>
            <FolderHeader navigation={navigation} route={route}/>
            <MediaList media={children} onMediaSelect={onMediaSelect}/>
            <Toolbox navigation={navigation}/>
        </Screen>
    )
}