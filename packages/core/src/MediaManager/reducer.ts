import {types} from "./const";
import {uniqBy} from "lodash";

interface MediaActions {
    payload: any;
    type: string;
}

const INITIAL_STORE = {
    media: [],
};

export const mediaStoreReducer = (
    state = INITIAL_STORE,
    action: MediaActions
) => {
    switch (action.type) {
        case types.LIST_MEDIA:
            return {
                ...state,
                media: action.payload
            }
        case types.ADD_MEDIA:
            return {
                ...state,
                media: uniqBy(action.payload, 'nid')
            }
        default:
            return state;
    }
};