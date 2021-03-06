function makeId() {
  return Math.random().toString(36).substring(7);
}
export const ThemeManager = {
  songs: [
    {
      nid: "randomstring",
      title: "Song Name",
      url: "Song url",
      artist: "Artist Name",
      album: "Album Name",
    },
  ],

  getThemes: function () {
    return this.songs;
  },

  addSongs: function (items: any) {
    items.forEach((item: any) => {
      item.nid = makeId();
      this.songs.push(item);
    });
  },
};
