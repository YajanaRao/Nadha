import groupBy from "lodash/groupBy";
import values from "lodash/values";
import orderBy from "lodash/orderBy";
import { MediaManager } from "../MediaManager";


import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Action } from "../types";

export const getAllMedia = () => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  try {
    const media: any = MediaManager.getMedia()

    dispatch({
      type: Action.LIST_MEDIA,
      payload: media,
      // query: query
    });

  } catch (error) { }
}

export const addSongs = (songs: any) => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  try {
    dispatch({
      type: Action.ADD_SONGS,
      payload: MediaManager.addSongs(songs)
    })
  } catch (error) {

  }
}

export const updateQuery = (query: string) => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    if (query) {
      // RNAndroidAudioStore.search({ searchParam: query })
      // .then((media) => {
      //   dispatch({
      //     type: "UPDATE_QUERY",
      //     payload: media,
      //     // query: query
      //   });
      // })
      // .catch((error) => {
      //   log(error);
      // });
    } else {
      dispatch({
        type: "UPDATE_QUERY",
        payload: false,
        // query: query
      });
    }
  } catch (error) { }
};

export const getOfflineArtists = () => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    // RNAndroidAudioStore.getArtists({})
    //   .then((media) => {
    //     dispatch({
    //       type: "OFFLINE_ARTISTS",
    //       payload: media,
    //     });
    //   })
    //   .catch((er) => {
    //     log(er);
    //     dispatch({
    //       type: "NOTIFY",
    //       payload: "Something went wrong",
    //     });
    //   });
  } catch (error) { }
};

export const getOfflineAlbums = () => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    // RNAndroidAudioStore.getAlbums({})
    //   .then((media) => {
    //     dispatch({
    //       type: "OFFLINE_ALBUMS",
    //       payload: media,
    //     });
    //   })
    //   .catch((er) => {
    //     log(er);
    //     dispatch({
    //       type: "NOTIFY",
    //       payload: "Something went wrong",
    //     });
    //   });
  } catch (error) { }
};

export const findAlbumSongs = async (album: string) => {
  // const songs = await RNAndroidAudioStore.getSongs({
  //   album,
  // })
  //   .then((media) => {
  //     return media;
  //   })
  //   .catch((er) => log(er));
  const songs: any = [];
  return songs;
};

export const findArtistSongs = async (artist: string) => {
  // const songs = await RNAndroidAudioStore.getSongs({
  //   artist,
  // })
  //   .then((media) => {
  //     return media;
  //   })
  //   .catch((er) => log(er));
  const songs: any = [];
  return songs;
};
