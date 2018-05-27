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
      AntiJamD3.getPositionsForComputeCC(1, 4).should.deep.equal([1, 3, 5, 7]);
      AntiJamD3.getPositionsForComputeCC(2, 4).should.deep.equal([2, 3, 6, 7]);
      AntiJamD3.getPositionsForComputeCC(2, 1).should.deep.equal([2]);
      AntiJamD3.getPositionsForComputeCC(3, 3).should.deep.equal([4, 5, 6]);
    });
  });
});
