export class AntiJamD3 {
  // codePhrase only from 0s and 1s
  constructor(codePhrase) {
    this.codePhrase = codePhrase;
    this.numberIC = this.codePhrase.length;
    this.numberCC = Math.ceil(
      Math.log2(this.numberIC + 1 + Math.ceil(Math.log2(this.numberIC)))
    );
    this.length = this.numberCC + this.numberIC;
    this.ccpositions = this.computeCCPositions();
    this.phraseMockup = this.makePhraseMockup();
    this.phrase = this.makePhrase();
  }

  computeCCPositions() {
    const ccpos = [];
    for (let i = 0; i < this.numberCC; i++) {
      ccpos.push(Math.pow(2, i) - 1);
    }
    return ccpos;
  }

  makePhraseMockup() {
    const characters = Array.from(this.codePhrase);
    const mockup = [];
    let idx = 0;
    for (let i = 0; i < this.length; i++) {
      if (this.ccpositions.includes(i)) {
        mockup[i] = 'k';
      } else {
        mockup[i] = characters[idx];
        idx++;
      }
    }
    return mockup;
  }

  makePhrase() {
    let phrase = '';
    let order = 1;
    for (let sym of this.phraseMockup) {
      if (sym === 'k') {
        const positions = AntiJamD3.getPositionsForComputeCC(
          order,
          this.length
        );
        const ccvalue = positions
          .map(pos => this.phraseMockup[pos])
          .filter(el => el !== 'k')
          .reduce((acc, val) => acc ^ Number(val), 0);
        phrase += ccvalue;
        order++;
      } else {
        phrase += sym;
      }
    }
    return phrase;
  }
  static getPositionsForComputeCC(order, limit) {
    if (order <= 0) throw new Error('Order must be greater than 0');
    if (limit <= 0) throw new Error('Limit must be greater than 0');

    const orderBitwise = Math.pow(2, order - 1);
    const result = [];
    let idx = 1;
    while (idx <= limit) {
      if (idx & orderBitwise) result.push(idx);
      idx++;
    }
    return result;
  }
}
