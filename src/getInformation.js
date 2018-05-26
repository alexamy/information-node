export default class Information {
  constructor(message) {
    this.message = this.process(message);
    this.symbols = Array.from(new Set(this.message));
    this.length = {
      message: this.message.length,
      symbols: this.symbols.length
    };
    this.probabilities = this.countProbabilities();
    this.entropy = this.countInformation();
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

  countProbabilities() {
    const probs = {};
    this.symbols.map(
      sym => (probs[sym] = this.countsInMessage(sym) / this.length.message)
    );
    return probs;
  }

  countInformation = () =>
    Object.values(this.probabilities).reduce(
      (acc, prob) => acc + -prob * Math.log2(prob),
      0
    );
}
