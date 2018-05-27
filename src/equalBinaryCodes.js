export default class EqualBinaryCoder {
  constructor(symbols) {
    this.assertSymbolsArray(symbols);
    this.wordLength = Math.ceil(Math.log2(symbols.length));
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
}
