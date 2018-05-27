import { Information } from './information.js';

// all codecs must be called through Codec
export class Codec {
  constructor(message, coder) {
    this.info = new Information(message);
    this.message = message;
    this.codes = new coder(this.info).codes;
    this.messageCoded = this.code(this.message, this.codes);
  }

  code = (message, codes) =>
    Array.from(message)
      .map(ch => codes[ch])
      .join('');

  total = () =>
    JSON.stringify(
      {
        message: this.message,
        codes: this.codes,
        messageCoded: this.messageCoded
      },
      null,
      2
    );
}
export class EqualBinaryCodes {
  constructor(info) {
    this.symbols = info.symbols;
    this.wordLength = Math.ceil(Math.log2(this.symbols.length));
    this.codes = this.makeCodes(this.symbols, this.wordLength);
  }

  makeCodes(symbols, wordLength) {
    const padLeftZeroes = (str, count) => {
      if (count >= 0) {
        for (let i = 0; i < count; i++) str = '0' + str;
      }
      return str;
    };

    const codes = {};
    symbols.forEach((symbol, i) => {
      const binary = i.toString(2);
      codes[symbol] = padLeftZeroes(binary, wordLength - binary.length);
    });
    return codes;
  }

  total = () =>
    JSON.stringify(
      {
        symbols: this.symbols,
        wordLength: this.wordLength,
        codes: this.codes
      },
      null,
      2
    );
}

export class ShannonCodes {
  constructor(info) {
    this.probabilities = this.toMap(info.probabilities);
    this.codes = {};
    for (let k of this.probabilities.keys()) this.codes[k] = '';
    this.makeCodes(this.probabilities, this.codes);
  }

  toMap(probabilities) {
    let keyValuePairs = [];
    for (let key in probabilities) {
      keyValuePairs.push([key, probabilities[key]]);
    }
    keyValuePairs.sort((a, b) => b[1] - a[1]);
    return new Map(keyValuePairs);
  }

  getBestSliceIndex(probabilities) {
    const asArray = Array.from(probabilities.values());
    const sum = asArray.reduce((acc, val) => acc + val, 0);
    let sumAfter = sum;
    let sumBefore = 0;
    let idx = 0;
    let diffOld = Infinity;
    let diffNew = 0;
    for (let prob of asArray) {
      sumBefore += prob;
      sumAfter -= prob;
      diffNew = Math.abs(sumBefore - sumAfter);
      if (diffNew > diffOld) {
        idx = idx - 1;
        break;
      }
      diffOld = diffNew;
      idx++;
    }
    return idx;
  }

  makeCodes(probabilities, writeTo) {
    const whereToSlice = this.getBestSliceIndex(probabilities);
    const first = new Map();
    const last = new Map();
    let idx = 0;
    for (let [k, v] of probabilities) {
      if (idx <= whereToSlice) {
        writeTo[k] += '0';
        first.set(k, v);
      } else {
        writeTo[k] += '1';
        last.set(k, v);
      }
      idx++;
    }
    if (first.size > 1) this.makeCodes(first, writeTo);
    if (last.size > 1) this.makeCodes(last, writeTo);
  }

  total = () =>
    JSON.stringify(
      {
        probabilities: this.probabilities,
        codes: this.codes
      },
      null,
      2
    );
}

export class HoffmanCodes {
  constructor(info) {
    this.probabilities = new Map(this.sortProbabilities(info.probabilities));
  }

  sortProbabilities(probabilities) {
    return [];
  }
}
