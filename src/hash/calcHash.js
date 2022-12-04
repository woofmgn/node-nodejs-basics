import { createReadStream } from 'node:fs';
import { dirname } from 'node:path';
import path from 'path';
import { fileURLToPath } from 'url';

const {
  createHash
} = await import('node:crypto');

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, './files', '/fileToCalculateHashFor.txt')

  const hash = createHash('sha256');
  const input = createReadStream(filePath);

  input.on('readable', () => {
    const data = input.read()
    if (data) {
      hash.update(data)
    } else {
      console.log(`${hash.digest('hex')}`);
    }
  })
};

await calculateHash();