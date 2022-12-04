import fs from 'fs/promises';
import { dirname } from 'node:path';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const fileDir = path.join(__dirname, './files');

  try {
    const list = await fs.readdir(fileDir)
    console.log(list);
  } catch {
    throw new Error('FS operation failed')
  }
};

await list();