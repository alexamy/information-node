import { readFile } from 'fs';
import Information from './information.js';
import EqualBinaryCodes from './equalBinaryCodes.js';

const messagePath = process.argv[2];
if (!messagePath) throw new Error('No path provided!');
readFile(messagePath, 'utf-8', processFile);

function processFile(error, data) {
  if (error) {
    console.log(error);
    return error;
  }

  const message = data;
  const info = new Information(message);
  const equalBinaryCodes = new EqualBinaryCodes(info.symbols);
  info.showTotal();
  equalBinaryCodes.showTotal();
}
