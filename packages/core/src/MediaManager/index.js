"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaManager = void 0;
function makeId() {
  return Math.random().toString(36).substring(7);
}
exports.MediaManager = {
  songs: [
    {
      nid: "randomstring0",
      title: "Song Name 0",
      url: "Song url",
      artist: "Artist Name",
      album: "Album Name",
    },
    {
      nid: "randomstring1",
      title: "Song Name 1",
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
