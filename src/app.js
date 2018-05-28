import { readFile } from 'fs';
import { Information } from './information.js';
import {
  Codec,
  EqualBinaryCodes,
  ShannonCodes,
  HoffmanCodes
} from './codec.js';
import { AntiJamD3Codec, AntiJamD4Codec } from './antijamCodec.js';

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

  // alphabetically
  const message = prepareMessage(data);
  const info = new Information(message);
  console.log('information', JSON.stringify(info.total(), null, 2));

  // codecs
  const codecs = [
    EqualBinaryCodes,
    ShannonCodes,
    HoffmanCodes,
    AntiJamD3Codec,
    AntiJamD4Codec
  ];
  for (let codec of codecs) {
    const codedMsg = new Codec(message, codec);
    const codedMsgInfo = new Information(codedMsg.messageCoded);
    console.log(codedMsg.total());
    console.log(codedMsgInfo.total());
  }
}
