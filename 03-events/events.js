const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffe-order terjadi
const makeCoffe = ({ name }) => {
  console.log(`Kopi ${name} telah dibuat!`);
};

// mendaftarkan fungsi makeCoffe sebagai listener event coffe-order
myEventEmitter.on("coffe-order", makeCoffe);
