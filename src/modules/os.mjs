import { EOL, cpus, homedir, userInfo, arch } from 'os';

const os = (args) => {
  try {
    switch (args[0]) {
      case '--EOL':
        console.log(JSON.stringify(EOL));
        break;
      case '--cpus':
        console.log('Overall amount: ' + cpus().length);
        let arr = [];
        let myCpus = cpus();

        for (let cpu of myCpus) {
          arr.push({ Model: cpu.model, 'Clock Rate': cpu.speed });
        }
        console.table(arr);
        break;
      case '--homedir':
        console.log(homedir());
        break;
      case '--username':
        console.log(userInfo().username);
        break;
      case '--architecture':
        console.log(arch());
        break;
      default:
        console.log('Unknown argument');
        break;
    }
  } catch (error) {
    console.error('OS operation failed');
  }
};

export default os;
