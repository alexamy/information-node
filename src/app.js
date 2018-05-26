import { readFile } from 'fs';
import Information from './getInformation.js';

function processFile(error, data) {
  if (error) {
    console.log(error);
    return error;
  }

  const message = data;
  const info = new Information(message);
  info.showTotal();
}
const messagePath = process.argv[2];
if (!messagePath) throw new Error('No path provided!');

readFile(messagePath, 'utf-8', processFile);
