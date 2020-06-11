import { combineReducers } from "redux";
import { ArtistProps, TrackProps, AlbumProps, Action } from "../types";
import { uniqBy } from "lodash";

interface MediaActions {
  payload: TrackProps[] | ArtistProps[] | AlbumProps[] | any;
  type: string;
}

interface PlayerActions {
  status?: string;
  track?: TrackProps;
  type: string;
}

interface ConfigActions {
  payload?: boolean | string;
  repeat?: string;
  type: string;
}

interface QueryActions {
  payload: boolean | string;
  type: string;
}
const INITIAL_QUERY = {
  message: "",
  searchResult: false,
};

export const INITIAL_CONFIG = {
  radio: false,
  repeat: "repeat-all",
  setup: false,
  themeType: "dark",
};

const INITIAL_STATE = {
  active: {},
  status: "init",
};

const INITIAL_STORE = {
  albums: [],
  artists: [],
  songs: [],
};

// FIXME: Javascript implementation

export const mediaStoreReducer = (
  state = INITIAL_STORE,
  action: MediaActions
) => {
  switch (action.type) {
    case Action.LIST_MEDIA:
      return {
        ...state,
        songs: action.payload
      }
    case Action.ADD_SONGS:
      return {
        ...state,
        songs: uniqBy(action.payload, 'nid')
      }
    default:
      return state;
  }
};

export const playerStateReducer = (
  state = INITIAL_STATE,
  action: PlayerActions
) => {
  switch (action.type) {
    case "STATUS":
      return {
        ...state,
        status: action.status,
      };
    case "LOAD":
      return {
        ...state,
        active: action.track,
      };

    case "COMPLETED":
      return {
        ...state,
        status: "paused",
      };
    default:
      return state;
  }
};

export const queryReducer = (state = INITIAL_QUERY, action: QueryActions) => {
  switch (action.type) {
    case "UPDATE_QUERY":
      return {
        ...state,
        searchResult: action.payload,
      };
    case "NOTIFY":
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export const configReducer = (
  state = INITIAL_CONFIG,
  action: ConfigActions
) => {
  switch (action.type) {
    case "UPDATE_THEME":
      return {
        ...state,
        themeType: action.payload,
      };
    case "REPEAT":
      return {
        ...state,
        repeat: action.repeat,
      };
    case "DEFAULT_SETUP":
      return {
        ...state,
        setup: action.payload,
      };
    case "RADIO_MODE":
      return {
        ...state,
        radio: action.payload,
      };
    default:
      return state;
  }
};

export const RootReducer = combineReducers<any>({
  config: configReducer,
  mediaStore: mediaStoreReducer,
  playerState: playerStateReducer,
  query: queryReducer,
});

export type RootReducerType = ReturnType<typeof RootReducer>;
