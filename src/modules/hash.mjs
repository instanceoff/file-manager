import { createHash } from 'crypto';
import { readFile } from 'fs';

const hash = async (path) => {
  try {
    readFile(path, (err, data) => {
      try {
        const hash = createHash('sha256').update(data).digest('hex');
        console.log(hash);
      } catch (error) {
        console.error('Hash operation failed');
      }
    });
  } catch (error) {
    console.error('Hash operation failed');
  }
};

export default hash;
