import { createWriteStream } from "node:fs";
import { dirname } from "node:path";
import path from "path";
import { fileURLToPath } from "url";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const writeFile = path.join(__dirname, "/files", "fileToWrite.txt");

  const readebleStream = process.stdin;
  const writebleStream = createWriteStream(writeFile);

  try {
    readebleStream.on("data", (chunk) => writebleStream.write(chunk));
  } catch (err) {
    throw new Error(err);
  }
};

await write();
