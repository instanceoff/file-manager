import { createWriteStream, createReadStream, access } from 'fs';
import add from './add.mjs';

const cp = async (path, copyPath) => {
  try {
    access(path, (err) => {
      try {
        if (err) throw 'err';
        let rs = createReadStream(path);
        let ws = createWriteStream(copyPath);
        rs.pipe(ws);
      } catch (error) {}
    });
  } catch (error) {
    console.error('Copy operation failed', error);
  }
};

export default cp;
