import { writeFile } from 'fs';

const add = async (path) => {
  writeFile(path, '', (err) => err && console.log('FS operation failed'));
};

export default add;
