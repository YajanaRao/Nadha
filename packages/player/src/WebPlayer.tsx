import { DeviceEventEmitter } from "react-native";

const MediaPlayer = {
  player: new Audio(),
  load(url: string) {
    return new Promise((resolve, reject) => {
      try {
        this.player = new Audio(url);
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  },
  play() {
    try {
      this.player.play();
      this.player.addEventListener("ended", () => {
        DeviceEventEmitter.emit("skip_to_next");
      });
    } catch (error) {}
  },
  pause() {
    try {
      this.player.pause();
    } catch (error) {}
  },
};

export { MediaPlayer };
