import {mediaManager} from "./index";
import {types} from "./const";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {log} from "@nadha/utils";

export const getMedia = () => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
        const media: any = mediaManager.getMedia();
        dispatch({
            type: types.LIST_MEDIA,
            payload: media,
        });

    } catch (error) {
        log.error('getMedia', error);
    }
}

export const addMedia = (songs: any) => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
        dispatch({
            type: types.ADD_MEDIA,
            payload: mediaManager.addSongs(songs)
        })
    } catch (error) {
        log.error('addMedia', error);
    }
}
