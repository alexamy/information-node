export default class EqualBinaryCoder {
  constructor(symbols) {
    this.assertDistinct(symbols);
  }

  assertDistinct(symbols) {
    const distinct = new Set(symbols);
    if (distinct.size !== symbols.length) {
      throw new Error('Symbols array must containt only distinct elements!');
    }
  }
}
