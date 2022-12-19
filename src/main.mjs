import process from 'node:process';
import { stdin } from 'node:process';
import path from 'path';
import * as fs from 'fs';
import * as sys from 'os';
import add from './modules/add.mjs';
import cat from './modules/cat.mjs';
import compress from './modules/compress.mjs';
import decompress from './modules/decompress.mjs';
import cp from './modules/cp.mjs';
import hash from './modules/hash.mjs';
import ls from './modules/ls.mjs';
import mv from './modules/mv.mjs';
import os from './modules/os.mjs';
import rm from './modules/rm.mjs';
import rn from './modules/rn.mjs';
import up from './modules/up.mjs';

// import * as aboaba from '/home/instance';
//dirname(fileURLToPath(import.meta.url))
let currentPath = sys.homedir();

const getUsername = () => {
  let username = 'User';
  process.argv.find((val) => {
    if (!val.startsWith('--username=')) return false;
    username = val.split('=')[1];
    return true;
  });
  return username;
};

const cd = async (args) => {
  if (args.length < 1) {
    console.log('Not enough parameters');
    return;
  }
  let newPath = currentPath + path.sep + args[0];
  fs.access(newPath, (err) => {
    if (err) {
      console.log('CD operation failed');
      return;
    }
    currentPath = newPath;
    console.log(`You are currently in ${newPath}`);
  });
};

console.log(`Welcome to the File Manager, ${getUsername()}!`);
console.log(`You are currently in ${currentPath}`);

stdin.on('data', async (data) => {
  let aboab = data.toString();
  let convData = aboab.replace('\n', '').split(' ');
  let [command, ...args] = convData;
  switch (command) {
    case 'cd':
      cd(args);
      break;
    case 'up':
      currentPath = await up(currentPath);
      console.log(`You are currently in ${currentPath}`);
      break;
    case 'ls':
      await ls(currentPath);
      console.log(`You are currently in ${currentPath}`);
      break;
    case 'cat':
      await cat(currentPath + path.sep + args[0]);
      console.log(`You are currently in ${currentPath}`);
      break;
    case 'add':
      await add(currentPath + path.sep + args[0]);
      console.log(`You are currently in ${currentPath}`);
      break;
    case 'rm':
      await rm(currentPath + path.sep + args[0]);
      console.log(`You are currently in ${currentPath}`);
      break;
    case 'rn':
      await rn(
        currentPath + path.sep + args[0],
        currentPath + path.sep + args[1]
      );
      console.log(`You are currently in ${currentPath}`);
      break;
    case 'cp':
      await cp(
        currentPath + path.sep + args[0],
        currentPath + path.sep + args[1] + path.sep + args[0] + 'copy'
      );
      console.log(`You are currently in ${currentPath}`);
      break;
    case 'mv':
      await mv(
        currentPath + path.sep + args[0],
        currentPath + path.sep + args[1] + path.sep + args[0]
      );
      console.log(`You are currently in ${currentPath}`);
      break;
    case 'os':
      os(args);
      console.log(`You are currently in ${currentPath}`);
      break;
    case 'hash':
      await hash(currentPath + path.sep + args[0]);
      console.log(`You are currently in ${currentPath}`);
      break;
    case 'compress':
      await compress(
        currentPath + path.sep + args[0],
        currentPath + path.sep + args[1]
      );
      console.log(`You are currently in ${currentPath}`);
      break;
    case 'decompress':
      await decompress(
        currentPath + path.sep + args[0],
        currentPath + path.sep + args[1]
      );
      console.log(`You are currently in ${currentPath}`);
      break;
    case '.exit':
      console.log(
        `Thank you for using File Manager, ${getUsername()}, goodbye!`
      );
      process.exit();
      break;
    default:
      console.log('Undefined command');
      break;
  }
});

process.on('SIGINT', () => {
  console.log(`\nThank you for using File Manager, ${getUsername()}, goodbye!`);
  process.exit();
});
