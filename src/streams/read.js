// import { dirname } from "node:path";
// import path from "path";
// import { fileURLToPath } from "url";
// const readable = getReadableStreamSomehow();

// const read = async () => {
//   const __filename = fileURLToPath(import.meta.url);
//   const __dirname = dirname(__filename);
//   const dirPath = path.join(__dirname, "./files");
//   const copyPath = path.join(__dirname, "/files_copy");

//   // 'readable' may be triggered multiple times as data is buffered in
//   readable.on("readable", () => {
//     let chunk;
//     console.log("Stream is readable (new data received in buffer)");
//     // Use a loop to make sure we read all currently available data
//     while (null !== (chunk = readable.read())) {
//       console.log(`Read ${chunk.length} bytes of data...`);
//     }
//   });

//   // 'end' will be triggered once when there is no more data available
//   readable.on("end", () => {
//     console.log("Reached end of stream.");
//   });
// };

// await read();
