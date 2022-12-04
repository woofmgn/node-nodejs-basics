import fs from 'fs/promises';
import { dirname } from 'node:path';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const deleteFile = path.join(__dirname, './files', 'fileToRemove.txt');

  try {
    await fs.rm(deleteFile)
  } catch {
    throw new Error('FS operation failed')
  }
};

await remove();