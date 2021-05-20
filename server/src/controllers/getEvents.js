export default class GetEvents {
  constructor(controller) {
    this.controller = controller;
  }
  getEvents() {
    const functions = Reflect.ownKeys(this.controller.prototype)
      .filter((fn) => fn !== "constructor")
      .map((name) => [name, this[name].bind(this)]);

    return new Map(functions);
  }
}
