import { createBrotliDecompress } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';

const decompress = async (oldPath, newPath) => {
  try {
    const brotli = createBrotliDecompress();

    let rstream = createReadStream(oldPath);
    let wstream = createWriteStream(newPath);

    rstream.pipe(brotli).pipe(wstream);
  } catch (error) {
    console.error('Decompress operation failed');
  }
};

export default decompress;
