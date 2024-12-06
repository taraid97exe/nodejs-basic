// TODO 1
const { EventEmitter } = require("events");

const birthdayEventListener = (name) => {
  console.log(`Happy Birthday ${name}!`);
};

// TODO 2
const myEventEmitter = new EventEmitter();

// TODO 3
const birthday = ({ name }) => {
  birthdayEventListener(name);
};
myEventEmitter.on("birthday", birthday);

// TODO 4
myEventEmitter.emit("birthday", { name: "Tata" });
