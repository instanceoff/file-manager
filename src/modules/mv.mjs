import { createWriteStream, createReadStream, access } from 'fs';
import { unlink } from 'fs';

const mv = async (path, newPath) => {
  try {
    access(path, (err) => {
      try {
        if (err) throw 'err';
        let rs = createReadStream(path);
        let ws = createWriteStream(newPath);
        ws.on('finish', () => {
          unlink(path, (err) => err && console.log('Remove operation failed'));
        });
        rs.pipe(ws);
      } catch (error) {}
    });
  } catch (error) {
    console.error('Copy operation failed', error);
  }
};

export default mv;
