<h3 align="center">
  <a href="https://github.com/YajanaRao/Nadha/tree/master/docs/nadha_text.png">
  <img src="https://github.com/YajanaRao/Nadha/tree/master/docs/nadha_text.png?raw=true" alt="Nadha Logo" width="500">
  </a>
</h3>

Nadha, is Sanskrit for `sound from the depths of the soul`

An extensible, cross platform music player

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a72df383fa3048dd8ba0f41449886b14)](https://app.codacy.com/manual/yajananrao/Nadha?utm_source=github.com&utm_medium=referral&utm_content=YajanaRao/Nadha&utm_campaign=Badge_Grade_Dashboard)
[![Netlify Status](https://api.netlify.com/api/v1/badges/fea67322-45d4-4a22-b388-bf990397775d/deploy-status)](https://app.netlify.com/sites/nadha/deploys)
![Build](https://github.com/YajanaRao/Nadha/workflows/Build/badge.svg?branch=master)
![Platform - Android](https://img.shields.io/badge/platform-Android-yellow.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/YajanaRao/Serenity/pulls)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Tech

Nadha uses a number of open source projects to work properly:

- [React Native](https://reactnative.dev) - React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.!
- [React Native For Web](https://github.com/necolas/react-native-web) - "React Native for Web" makes it possible to run React Native components and APIs on the web using React DOM.
- [React Navigation 5](https://reactnavigation.org) - Routing and navigation for React Native apps

## Installation

Install the dependencies and devDependencies and start the server.

```sh
cd Nadha
yarn install
yarn compile
```

### Android

```sh
yarn android
```

### Web

```sh
yarn web
```

### IOS

```sh
yarn ios
```

For production environments...

```sh
yarn build
```

## Plugins

Nadha is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin       | README                                     |
| ------------ | ------------------------------------------ |
| Dropbox      | [Coming up](plugins/dropbox/README.md)     |
| Google Drive | [Coming up](plugins/googledrive/README.md) |

## License

MIT

**Free Software, Hell Yeah!**
