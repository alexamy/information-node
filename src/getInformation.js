export default class Information {
  constructor(message) {
    this.message = this.process(message);
  }

  process(message) {
    return message
      .trim()
      .toLowerCase()
      .replace(/[^ а-я]/g, '');
  }
}
