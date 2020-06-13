import {mediaStoreReducer} from "../src/MediaManager/reducer";
import {types} from '../src/MediaManager/const'
import expect from 'expect'

const song = {
    nid: "randomstring6",
    title: "Song Name 2",
    properties: {
        url: "Song url",
        artist: "Artist Name",
        album: "Album Name",
    },
    type: 'Music',
    subtitle: "03:24"
}

const nestedMedia = {
    nid: "randomstring3",
    title: "Kannada songs",
    properties:
        {
            url: "Song url",
            artist: "Artist Name",
            album: "Album Name",

        }
    ,
    children: [
        {
            nid: "randomstring4",
            title: "Song Name 0",
            properties: {
                url: "Song url",
                artist: "Artist Name",
                album: "Album Name",
            },
            type: "Music",
            subtitle: "Artist Name"
        },
        {
            nid: "randomstring5",
            title: "Song Name 1",
            properties: {
                url: "Song url",
                artist: "Artist Name",
                album: "Album Name",
            },
            type: "Music",
            subtitle: "Album Name"
        }
    ],
    type: 'Folder',
    subtitle: "10 songs"
}


const emptyFolder = {
    nid: "randomstring3",
    title: "Kannada songs",
    properties:
        {
            url: "Song url",
            artist: "Artist Name",
            album: "Album Name",

        }
    ,
    children: [],
    type: 'Folder',
    subtitle: "10 songs"
}

describe('actions', () => {
    it(`should handle ${types.ADD_MEDIA} to add a song action`, () => {
        const givenState = {
            media: [],
        };

        const givenAction = {
            payload: [song],
            type: types.ADD_MEDIA,
        };

        const actualState = mediaStoreReducer(givenState, givenAction);

        expect(actualState).toEqual({
            media: [song],
        });
    });

    it(`should handle ${types.ADD_MEDIA} to add duplicate song action`, () => {
        const givenState = {
            media: [],
        };

        const givenAction = {
            payload: [song, song],
            type: types.ADD_MEDIA,
        };

        const actualState = mediaStoreReducer(givenState, givenAction);

        expect(actualState).toEqual({
            media: [song],
        });
    });

    it(`should handle ${types.ADD_MEDIA} to add a folder action`, () => {
        const givenState = {
            media: [],
        };

        const givenAction = {
            payload: [nestedMedia],
            type: types.ADD_MEDIA,
        };

        const actualState = mediaStoreReducer(givenState, givenAction);

        expect(actualState).toEqual({
            media: [nestedMedia],
        });
    });

    it(`should handle ${types.ADD_MEDIA} to add a empty folder action`, () => {
        const givenState = {
            media: [],
        };

        const givenAction = {
            payload: [emptyFolder],
            type: types.ADD_MEDIA,
        };

        const actualState = mediaStoreReducer(givenState, givenAction);

        expect(actualState).toEqual({
            media: [emptyFolder],
        });
    });

    it(`should handle ${types.LIST_MEDIA} to list song action`, () => {
        const givenState = {
            media: [],
        };

        const givenAction = {
            payload: [song],
            type: types.LIST_MEDIA,
        };

        const actualState = mediaStoreReducer(givenState, givenAction);

        expect(actualState).toEqual({
            media: [song],
        });
    });

    it(`should handle ${types.LIST_MEDIA} to list song action`, () => {
        const givenState = {
            media: [],
        };

        const givenAction = {
            payload: [song],
            type: types.LIST_MEDIA,
        };

        const actualState = mediaStoreReducer(givenState, givenAction);

        expect(actualState).toEqual({
            media: [song],
        });
    });

    it(`should handle ${types.LIST_MEDIA} to list a folder action`, () => {
        const givenState = {
            media: [],
        };

        const givenAction = {
            payload: [nestedMedia],
            type: types.LIST_MEDIA,
        };

        const actualState = mediaStoreReducer(givenState, givenAction);

        expect(actualState).toEqual({
            media: [nestedMedia],
        });
    });

    it(`should handle ${types.LIST_MEDIA} to list empty folder action`, () => {
        const givenState = {
            media: [],
        };

        const givenAction = {
            payload: [emptyFolder],
            type: types.LIST_MEDIA,
        };

        const actualState = mediaStoreReducer(givenState, givenAction);

        expect(actualState).toEqual({
            media: [emptyFolder],
        });
    });


})