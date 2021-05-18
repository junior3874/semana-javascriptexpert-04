import RoomsControllers from "./controllers/roomsControllers.js";
import SocketServer from "./util/socket.js";
import Event from "events";
import { constants } from "./util/constants.js";

const port = process.env.PORT || 3000;

const socketServer = new SocketServer({ port });

const server = await socketServer.start();

const roomsController = new RoomsControllers();

const namespaces = {
  room: { controller: roomsController, eventEmitter: new Event() },
};

// namespaces.room.eventEmitter.on(
//   "userConnection",
//   namespaces.room.constroller.onNewConnection.bind(namespaces.room.constroller)
// );

// namespaces.room.eventEmitter.emit("userConnection", { id: "001" });
// namespaces.room.eventEmitter.emit("userConnection", { id: "002" });
// namespaces.room.eventEmitter.emit("userConnection", { id: "003" });

const routeConfig = Object.entries(namespaces).map(
  ([namespace, { controller, eventEmitter }]) => {
    const controllerEvents = controller.getEvents();
    eventEmitter.on(
      constants.event.USER_CONNECTED,
      controller.onNewConnection.bind(controller)
    );
    return {
      [namespace]: {
        events: controllerEvents,
        eventEmitter,
      },
    };
  }
);

socketServer.attachEvents({ routeConfig });
console.log("socket server is running at", server.address().port);
