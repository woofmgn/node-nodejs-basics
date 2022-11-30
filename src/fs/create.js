import { appendFile, stat } from 'fs/promises';
import { dirname } from 'node:path';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, './files', '/fresh.txt')
  
  try {
    await stat(filePath);
    console.log(new Error('FS operation failed'))
  } catch {
    try {
      await appendFile(filePath, 'I am fresh and young')
      console.log('я создался');
    } catch {
      throw new Error('File is not create');
    }
  }
};

await create();