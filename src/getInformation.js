export default class Information {
  constructor(message) {
    this.message = Information.process(message);
  }

  static process(message) {
    return message
      .trim()
      .toLowerCase()
      .replace(/[^ а-я]/g, '');
  }
}
