export const constants = {
  socketUrl: "https://ew-socket-server-jr8.herokuapp.com",
  socketNamespaces: {
    room: "room",
    lobby: "lobby",
  },
  peerConfig: Object.values({
    id: undefined,
    config: {
      host: "w-peerjr-server-jr8.herokuapp.com",
      secure: true,
      path: "/",
    },
  }),
  pages: {
    lobby: "/pages/lobby",
    login: "/pages/login",
  },
  events: {
    USER_CONNECTED: "userConnection",
    USER_DISCONNECTED: "userDisconnection",

    JOIN_ROOM: "joinRoom",
    LOBBY_UPDATED: "lobbyUpdated",
    UPGRADE_USER_PERMISSION: "upgradeUserPermission",

    SPEAK_REQUEST: "speakRequest",
    SPEAK_ANSWER: "speakAnswer",
  },
  firebaseConfig: {
    apiKey: "AIzaSyBgo7VcuzVxIqRFuNsBMcQnHBIJhvrGhQY",
    authDomain: "semana-js-expert-cf30a.firebaseapp.com",
    projectId: "semana-js-expert-cf30a",
    storageBucket: "semana-js-expert-cf30a.appspot.com",
    messagingSenderId: "112190830270",
    appId: "1:112190830270:web:62341ccb711dfb632f10ef",
    measurementId: "G-KJ3GKVK9EE",
  },
  storageKey: "jsexper:storage:user",
};
