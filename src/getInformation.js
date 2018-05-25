export default class Information {
  constructor(message) {
    this.message = this.process(message);
    this.symbols = new Set(this.message);
    this.length = {
      message: this.message.length,
      symbols: this.symbols.length
    };
  }

  process = message =>
    message
      .trim()
      .toLowerCase()
      .replace(/[^ а-я]/g, '');

  countsInMessage = symToFind =>
    Array.from(this.message).reduce(
      (acc, value) => (value === symToFind ? acc + 1 : acc),
      0
    );
}
