const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
  console.log(`Kopi ${name} telah dibuat!`);
};

// tambahkan variabel makeBill dengan const
const makeBill = ({ price }) => {
  console.log(`Bill sebesar ${price} telah dibuat!`);
};

// mendaftarkan fungsi makeCoffe sebagai listener event coffee-order
myEventEmitter.on("coffee-order", makeCoffee);

// tambahkan mendaftarkan fungsi makeBill sebagai listener event coffee-order
myEventEmitter.on("coffee-order", makeBill);

// Memicu event 'coffee-order' terjadi.\
// tambahkan variabel price dengan nilai 15 ribu
myEventEmitter.emit("coffee-order", { name: "Tubruk", price: 15000 });

/*
 * output:
 * Kopi Tubruk telah dibuat!
 */
