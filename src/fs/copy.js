import fs from 'fs/promises';
import { dirname } from 'node:path';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const dirPath = path.join(__dirname, './files')
  const copyPath = path.join(__dirname, '/files_copy')

  try {
    await fs.cp(dirPath, copyPath, { recursive: true, force: false, errorOnExist: true });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

copy();