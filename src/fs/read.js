import fs from 'fs/promises';
import { dirname } from 'node:path';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const readFiles = path.join(__dirname, './files', 'fileToRead.txt');

  try {
    const result = await fs.readFile(readFiles, { encoding: 'utf8' });
    console.log(result);
  } catch {
    throw new Error('FS operation failed')
  }
};

await read();