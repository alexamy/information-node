export class AntiJamD3 {
  // codePhrase only from 0s and 1s
  constructor(codePhrase) {
    this.codePhrase = codePhrase;
    this.numberIC = this.codePhrase.length;
    this.numberCC = Math.ceil(
      Math.log2(this.numberIC + 1 + Math.ceil(Math.log2(this.numberIC)))
    );
    this.ccpositions = this.computeCCPositions();
  }

  computeCCPositions() {
    const ccpos = [];
    for (let i = 0; i < this.numberCC; i++) {
      ccpos.push(Math.pow(2, i) - 1);
    }
    return ccpos;
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
