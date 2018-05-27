import { EqualBinaryCodes } from './codec.js';
import { AntiJamD3 } from './antijam.js';

export class AntiJamD3Codec {
  constructor(info) {
    this.codesOld = new EqualBinaryCodes(info).codes;
    this.codes = {};
    for (let key in this.codesOld) {
      this.codes[key] = new AntiJamD3(this.codesOld[key]).phrase;
    }
  }
}
