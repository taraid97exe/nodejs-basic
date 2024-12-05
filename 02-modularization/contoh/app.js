/* Gunakan object destructuring untuk mengimpor lebih dari satu nilai pada modul */

const http = require("http");
const { firstName, lastName } = require("./user");

console.log(firstName);
console.log(lastName);

/* 
* output:
Harry
Potter
*/
