export class Information {
  constructor(message) {
    this.message = this.prepareMessage(message);
    this.symbols = Array.from(new Set(this.message));
    this.length = {
      message: this.message.length,
      symbols: this.symbols.length
    };

    this.probabilities = this.countProbabilities(this.symbols);
    this.entropy = this.countInformation(this.probabilities);

    this.redunMax = Math.log2(this.symbols.length);
    this.redundancy = 1 - this.entropy / this.redunMax;
  }

  prepareMessage = message =>
    message
      .trim()
      .toLowerCase()
      .replace(/[^ а-я]/g, '');

  countProbabilities(symbols) {
    const countsInMessage = (sym, message) =>
      Array.from(message).reduce(
        (acc, value) => (value === sym ? acc + 1 : acc),
        0
      );

    const probs = {};
    symbols.map(
      sym =>
        (probs[sym] = countsInMessage(sym, this.message) / this.length.message)
    );
    return probs;
  }

  countInformation = probabilities =>
    Object.values(probabilities).reduce(
      (acc, prob) => acc + -prob * Math.log2(prob),
      0
    );

  showTotal = () => {
    console.log(
      JSON.stringify(
        {
          message: this.message,
          symbols: this.symbols,
          probabilities: this.probabilities,
          entropy: this.entropy,
          redundancy: this.redundancy
        },
        null,
        2
      )
    );
  };
}
