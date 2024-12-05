const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffe-order terjadi
const makeCoffee = ({ name }) => {
  console.log(`Kopi ${name} telah dibuat!`);
};

// mendaftarkan fungsi makeCoffe sebagai listener event coffe-order
myEventEmitter.on("coffee-order", makeCoffee);

// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit("coffee-order", { name: "Tubruk" });

/*
 * output:
 * Kopi Tubruk telah dibuat!
 */
