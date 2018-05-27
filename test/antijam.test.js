import 'chai/register-should';
import { AntiJamD3 } from '../src/antijam.js';

const codePhrase = '0101';

describe('AntiJamD3', () => {
  it('should set number of control symbols correctly', () => {
    new AntiJamD3(codePhrase).numberCC.should.equal(3);
  });
  it('should compute control characters positions correctly', () => {
    new AntiJamD3(codePhrase).ccpositions.should.deep.equal([0, 1, 3]);
  });
});
