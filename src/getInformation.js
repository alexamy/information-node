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
    this.redunMax = Math.log2(this.symbols.length);
    this.redundancy = 1 - this.entropy / this.redunMax;
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

  showTotal = () => {
    console.log(
      this.message,
      this.symbols,
      this.probabilities,
      this.entropy,
      this.redundancy
    );
  };
}
