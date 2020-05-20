/* global __DEV__ */

export const log = (message: any) => {
  if (__DEV__) {
    console.log(message);
  } else {
  }
};

export const logEvent = (event: string, message: any) => {
  if (__DEV__) {
    console.log(event, message);
  }
};
