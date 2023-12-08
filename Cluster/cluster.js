const cluster = require("cluster");
const http = require("http");
const OS = require("os");

// OS.cpus().length define how many core are there and we can create only that much workers
console.log(`Total CPU's: ${OS.cpus().length}`);

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // creating 2 workers
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker ${process.pid} started`);
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello World");
    } else if (req.url === "/slow-page") {
      for (let i = 0; i < 6000000000; i++) {}
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end("slow-page");
    }
  });

  server.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}
