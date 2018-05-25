export default class Information {
  constructor(message) {
    this.message = this.process(message);
  }

  process = message =>
    message
      .trim()
      .toLowerCase()
      .replace(/[^ а-я]/g, '');
}
