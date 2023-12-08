const fs = require("fs");

const readStream = fs.createReadStream("largeFile.txt");

readStream.on("data", (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});

readStream.on("end", () => {
  console.log("Finished reading data from file.");
});

readStream.on("error", (err) => {
  console.error(`Error occurred while reading file: ${err.message}`);
});
