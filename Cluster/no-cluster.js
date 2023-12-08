const http = require("http");

/**
 *  when we open the browser and hit the url http://localhost:3000/
 * it will take 4ms
 * and then we hit the url http://localhost:3000/slow-page
 * it will take 5.79s
 * from this if we switch back to url http://localhost:3000/ it will take 5.79s to load
 * but initially it took 4ms to load
 * why is that ?
 * because when we switch back to url http://localhost:3000/ single thread is busy in loading slow-page url that is why it is taking 5.79s to load url http://localhost:3000/
 *
 * so to solve this problem we will use cluster module
 */
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
  } else if (req.url === "/slow-page") {
    for (let i = 0; i < 6000000000; i++) {}
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Hello World");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
