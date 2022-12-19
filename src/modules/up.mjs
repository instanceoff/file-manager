import { homedir } from 'os';
import { sep } from 'path';

const up = (path) => {
  try {
    if (path == homedir()) {
      console.log('You are already in home directory');
      return path;
    }
    let splitedPath = path.split(sep);
    splitedPath.pop();
    const currentPath = splitedPath.join(sep);
    // console.log(`You are currently in ${currentPath}`);
    return currentPath;
  } catch (error) {
    console.error('UP operation failed');
  }
};

export default up;
