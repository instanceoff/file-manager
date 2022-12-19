import { createBrotliCompress } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';

const compress = async (oldPath, newPath) => {
  try {
    const brotli = createBrotliCompress();

    let rstream = createReadStream(oldPath);
    let wstream = createWriteStream(newPath);

    rstream.pipe(brotli).pipe(wstream);
  } catch (error) {
    console.error('Compress operation failed');
  }
};

export default compress;
