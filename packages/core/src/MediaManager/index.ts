import { makeId } from "../utils";

export const MediaManager = {
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

  addSongs: function (items: any) {
    for (const index in items) {
      let song = items[index];
      song.nid = makeId();
      this.songs.push(song);
    }
    return this.songs;
  },
};
