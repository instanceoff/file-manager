import { access, rename } from 'fs';

const rn = async (oldName, newName) => {
  access(oldName, (err) => {
    try {
      let err2 = null;
      access(newName, (err) => {
        try {
          if (!err) err2 = 'err';
        } catch (error) {
          console.error('Rename operation failed');
        }
      });
      if (err || err2) throw 'err';
      rename(oldName, newName, (err) => {
        if (err) throw 'FS operation failed';
      });
    } catch (error) {
      console.error('Rename operation failed');
    }
  });
};

export default rn;
