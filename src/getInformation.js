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

  countCountsInMessage = symToFind => {
    let count = 0;
    for (let sym of this.message) {
      sym === symToFind && count++;
    }
    return count;
  };
}
