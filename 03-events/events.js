const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

// atau opsi bisa membuat satu fungsi khusus untuk menangani event seperti ini
const makeCoffee = (name) => {
  console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = (price) => {
  console.log(`Bill sebesar ${price} telah dibuat!`);
};

// // fungsi yang akan dijalankan ketika event coffee-order terjadi
// const makeCoffee = ({ name }) => {
//   console.log(`Kopi ${name} telah dibuat!`);
// };

// // tambahkan variabel makeBill dengan const
// const makeBill = ({ price }) => {
//   console.log(`Bill sebesar ${price} telah dibuat!`);
// };

// // mendaftarkan fungsi makeCoffe sebagai listener event coffee-order
// myEventEmitter.on("coffee-order", makeCoffee);

// // tambahkan mendaftarkan fungsi makeBill sebagai listener event coffee-order
// myEventEmitter.on("coffee-order", makeBill);

// atau opsi bisa membuat satu variabel khusus untuk perintah panggilan dalam isi daftar listener
const onCoffeeOrderedListener = ({ name, price }) => {
  makeCoffee(name);
  makeBill(price);
};

// tambahkan mendaftarkan fungsi onCoffeeOrderListener sebagai listener event coffee-order
myEventEmitter.on("coffee-order", onCoffeeOrderedListener);

// Memicu event 'coffee-order' terjadi.\
// tambahkan variabel price dengan nilai 15 ribu
myEventEmitter.emit("coffee-order", { name: "Tubruk", price: 15000 });

/*
 * output:
 * Kopi Tubruk telah dibuat!
 * Bill sebesar 15000 telah dibuat!
 */
