import fs from 'fs/promises';
import { dirname } from 'node:path';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathFile = path.join(__dirname, './files', 'wrongFilename.txt')
  const renameFile = path.join(__dirname, '/files', 'properFilename.md')

  try {
    await fs.rename(pathFile, renameFile)
  } catch {
    throw new Error('FS operation failed')
  }
};

await rename();