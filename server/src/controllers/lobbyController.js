import { constants } from "../util/constants.js";
import GetEvents from "./getEvents.js";

export default class LobbyController extends GetEvents {
  constructor({ activeRooms, roomsListener }) {
    super(LobbyController);
    (this.activeRoomns = activeRooms), (this.roomsListener = roomsListener);
  }

  onNewConnection(socket) {
    const { id } = socket;

    console.log("lobby connection with", id);

    this.#updateLobbyRooms(socket, [...this.activeRoomns.values()]);
  }

  #updateLobbyRooms(socket, activeRooms) {
    socket.emit(constants.event.LOBBY_UPDATED, activeRooms);
  }
}
