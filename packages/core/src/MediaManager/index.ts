function makeId() {
  return Math.random().toString(36).substring(7);
}
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
    items.forEach((item: any) => {
      item.nid = makeId();
      this.songs.push(item);
    });
  },
};