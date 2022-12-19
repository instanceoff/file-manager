import { access, createReadStream } from 'fs';
import { stdout } from 'process';

const cat = async (path) => {
  access(path, (err) => {
    try {
      if (err) throw 'err';
      const rs = createReadStream(path, 'utf8');
      rs.pipe(stdout);
    } catch (error) {
      console.error('Cat operation failed');
    }
  });
};

export default cat;
