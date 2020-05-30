"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaManager = void 0;
function makeId() {
  return Math.random().toString(36).substring(7);
}
exports.MediaManager = {
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
    items.forEach((item) => {
      item.nid = makeId();
      this.songs.push(item);
    });
  },
};
//# sourceMappingURL=index.js.map
