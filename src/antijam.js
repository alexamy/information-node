export class AntiJamD3 {
  // codePhrase only from 0s and 1s
  constructor(codePhrase) {
    this.codePhrase = codePhrase;
    this.numberIC = this.codePhrase.length;
    this.numberCC = Math.ceil(
      Math.log2(this.numberIC + 1 + Math.ceil(Math.log2(this.numberIC)))
    );
    this.ccpositions = [];
  }
}
