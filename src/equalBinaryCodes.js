export default class EqualBinaryCoder {
  constructor(symbols) {
    this.assertSymbolsArray(symbols);
    this.symbols = symbols;
    this.wordLength = Math.ceil(Math.log2(symbols.length));
    this.codes = this.makeCodes(this.symbols, this.wordLength);
  }

  assertSymbolsArray(symbols) {
    if (symbols.length === 0) {
      throw new Error('There is must be one symbol at least');
    }
    const distinct = new Set(symbols);
    if (distinct.size !== symbols.length) {
      throw new Error('Symbols array must containt only distinct elements!');
    }
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
}
