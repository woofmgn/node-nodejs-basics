import { createReadStream } from "node:fs";
import { dirname } from "node:path";
import path from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const readFile = path.join(__dirname, "/files", "fileToRead.txt");

  const readebleStream = createReadStream(readFile, "utf-8");

  try {
    let data = "";

    readebleStream.on("data", (chunk) => (data += chunk));
    readebleStream.on("end", () => process.stdout.write(data));
  } catch (err) {
    throw new Error(err);
  }

  console.log(process.stdout);
};

await read();
