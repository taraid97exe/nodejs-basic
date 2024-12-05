// const http = require("http");
// const hostname =
//   process.env.NODE_ENV !== "production" ? "localhost" : "dicoding.com";
// const port = 3000;
// const requestHandler = (req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello, World!\n");
// };
// const server = http.createServer(requestHandler);
// server.listen(port, hostname, () => {
//   console.log(`Server berjalan pada http://${hostname}:${port}/`);
// });

const memoryInformation = process.memoryUsage();

console.log(memoryInformation);

/* output
{
  rss: 14569472,
  heapTotal: 2654208,
  heapUsed: 1788896,
  external: 855681,
  arrayBuffers: 9898
}
*/
