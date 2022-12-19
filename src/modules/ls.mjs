import { opendir } from 'fs';

const ls = async (path) => {
  try {
    opendir(path, async (err, dirN) => {
      const arr = [];
      for (let i = 0; true; i++) {
        const readed = await dirN.read();
        if (!readed) break;
        const name = readed.name;
        const type =
          (readed.isFile() && 'file') || (readed.isDirectory() && 'directory');
        arr.push({ Name: name, Type: type });
      }
      arr.sort();
      const files = arr.filter((val) => val.Type === 'file');
      const dirs = arr.filter((val) => val.Type === 'directory');
      console.table([...dirs, ...files]);
      dirN.close();
    });
  } catch (err) {
    console.error('List operation failed');
  }
};

export default ls;
