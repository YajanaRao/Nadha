"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeManager = void 0;
function makeId() {
  return Math.random().toString(36).substring(7);
}
exports.ThemeManager = {
  songs: [
    {
      nid: "randomstring",
      title: "Song Name",
      url: "Song url",
      artist: "Artist Name",
      album: "Album Name",
    },
  ],
  getSongs: function () {
    return this.songs;
  },
  addSongs: function (items) {
    var _this = this;
    items.forEach(function (item) {
      item.nid = makeId();
      _this.songs.push(item);
    });
  },
};
