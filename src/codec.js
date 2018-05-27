import { Information } from './information.js';

// all codecs must be called through Codec
export class Codec {
  constructor(message, coder) {
    this.info = new Information(message);
    this.message = message;
    this.codes = new coder(this.info.symbols).codes;
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
  constructor(symbols) {
    this.symbols = symbols;
    this.wordLength = Math.ceil(Math.log2(symbols.length));
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
  constructor(probabilities) {
    this.probabilities = probabilities;
  }

  static getBestSliceIndex(probabilities) {
    return 0;
  }
}
