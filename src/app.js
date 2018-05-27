import { readFile } from 'fs';
import { Information } from './information.js';
import { Codec, EqualBinaryCodes, ShannonCodes } from './codec.js';

const prepareMessage = message =>
  message
    .trim()
    .toLowerCase()
    .replace(/[^ а-я]/g, '');

const messagePath = process.argv[2];
if (!messagePath) throw new Error('No path provided!');
readFile(messagePath, 'utf-8', processFile);

function processFile(error, data) {
  if (error) {
    console.log(error);
    return error;
  }

  const message = prepareMessage(data);
  const info = new Information(message);
  const codedByEqualBinary = new Codec(message, EqualBinaryCodes);
  const codedByEqualBinaryInfo = new Information(
    codedByEqualBinary.messageCoded
  );
  const codedByShannon = new Codec(message, ShannonCodes);
  const codedByShannonInfo = new Information(codedByShannon.messageCoded);
  console.log('information', info.total());
  console.log('equalBinaryCoded', codedByEqualBinary.total());
  console.log('equalBinaryCoded information', codedByEqualBinaryInfo.total());
  console.log('shannonCoded', codedByShannon.total());
  console.log('shannonCoded information', codedByShannonInfo.total());
}
