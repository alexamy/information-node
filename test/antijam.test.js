import 'chai/register-should';
import { AntiJamD3 } from '../src/antijam.js';

const codePhrase = '0101';

describe('AntiJamD3', () => {
  it('should set number of control symbols', () => {
    new AntiJamD3(codePhrase).numberCC.should.equal(3);
  });
  it('should compute control characters positions', () => {
    new AntiJamD3(codePhrase).ccpositions.should.deep.equal([0, 1, 3]);
  });
  describe('#getPositionsForComputeCC', () => {
    it('should throw error on negative or zero order or limit', () => {
      (() => AntiJamD3.getPositionsForComputeCC(0, 1)).should.throw();
      (() => AntiJamD3.getPositionsForComputeCC(-1, 1)).should.throw();
      (() => AntiJamD3.getPositionsForComputeCC(1, 0)).should.throw();
      (() => AntiJamD3.getPositionsForComputeCC(1, -1)).should.throw();
    });
    it('should give right answer', () => {
      AntiJamD3.getPositionsForComputeCC(1, 4).should.deep.equal([1, 3]);
      AntiJamD3.getPositionsForComputeCC(2, 4).should.deep.equal([2, 3]);
      AntiJamD3.getPositionsForComputeCC(2, 1).should.deep.equal([]);
      AntiJamD3.getPositionsForComputeCC(3, 12).should.deep.equal([
        4,
        5,
        6,
        7,
        12
      ]);
    });
  });
  it('should make phrase mockup', () => {
    new AntiJamD3(codePhrase).phraseMockup.should.deep.equal([
      'k',
      'k',
      '0',
      'k',
      '1',
      '0',
      '1'
    ]);
  });
  it('should make right phrase', () => {
    new AntiJamD3(codePhrase).phrase.should.equal('0100101');
  });
});
