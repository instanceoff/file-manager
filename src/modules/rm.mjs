import { unlink } from 'fs';

const rm = async (path) => {
  unlink(path, (err) => err && console.log('Remove operation failed'));
};

export default rm;
