// import media from "./media";
// import RNAndroidAudioStore from "react-native-get-music-files";

export const MediaManager = {
  getAll() {
    return new Promise((resolve, reject) => {
      const media: any = [];
      resolve(media);
    });
    // RNAndroidAudioStore.getAll({})
    //   .then((tracks) => {
    //     console.log("tracks", tracks)
    //     if (tracks) {
    //       resolve(tracks)
    //     }
    //   })
    //   .catch((er) => {
    //     console.log("error");
    //     reject(er)
    //   });
    // })
  },
};
