const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// Event handler function
const eventHandler = () => {
  console.log("An event has been triggered");
};

// Attach event handler to the event
eventEmitter.on("my-event", eventHandler);
eventEmitter.on("say-hello", () => {
  console.log("Hello");
});
eventEmitter.on("marvelName", () => {
  setTimeout(() => {
    console.log("I am iron man");
  }, 1000);
});
eventEmitter.on("DC name", () => {
  console.log("Hello Batman");
});

// Emit the event
eventEmitter.emit("my-event");
eventEmitter.emit("marvelName");
eventEmitter.emit("DC name");
