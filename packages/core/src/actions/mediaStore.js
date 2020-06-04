"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostPlayedSongs = exports.filterSongsByGenre = exports.findArtistSongs = exports.findAlbumSongs = exports.getOfflineAlbums = exports.getOfflineArtists = exports.getOfflineSongs = exports.updateQuery = void 0;
var groupBy_1 = __importDefault(require("lodash/groupBy"));
var values_1 = __importDefault(require("lodash/values"));
var orderBy_1 = __importDefault(require("lodash/orderBy"));
var extensions_1 = require("@nadha/extensions");
exports.updateQuery = function (query) {
  return function (dispatch) {
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
        });
      }
    } catch (error) {}
  };
};
exports.getOfflineSongs = function () {
  return function (dispatch) {
    try {
      console.log("get pff;oe");
      extensions_1.MediaManager.getAll()
        .then(function (media) {
          console.log("response", media);
          dispatch({
            type: "OFFLINE_SONGS",
            payload: media,
          });
        })
        .catch(function (er) {
          // log(er);
          dispatch({
            type: "OFFLINE_SONGS",
            payload: [],
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
};
exports.getOfflineArtists = function () {
  return function (dispatch) {
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
    } catch (error) {}
  };
};
exports.getOfflineAlbums = function () {
  return function (dispatch) {
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
    } catch (error) {}
  };
};
exports.findAlbumSongs = function (album) {
  return __awaiter(void 0, void 0, void 0, function () {
    var songs;
    return __generator(this, function (_a) {
      songs = [];
      return [2 /*return*/, songs];
    });
  });
};
exports.findArtistSongs = function (artist) {
  return __awaiter(void 0, void 0, void 0, function () {
    var songs;
    return __generator(this, function (_a) {
      songs = [];
      return [2 /*return*/, songs];
    });
  });
};
exports.filterSongsByGenre = function (genre) {
  return __awaiter(void 0, void 0, void 0, function () {
    var songs;
    return __generator(this, function (_a) {
      songs = [];
      return [2 /*return*/, songs];
    });
  });
};
exports.mostPlayedSongs = function (array) {
  return orderBy_1.default(
    values_1.default(groupBy_1.default(array, "title")).map(function (group) {
      return __assign(__assign({}, group[0]), { count: group.length });
    })
  );
};
