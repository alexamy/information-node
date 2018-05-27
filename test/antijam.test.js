import 'chai/register-should';
import { AntiJamD3 } from '../src/antijam.js';

const codePhrase = '0101';

describe('AntiJamD3', () => {
  it('should set number of control symbols correctly', () => {
    new AntiJamD3(codePhrase).numberCC.should.equal(3);
  });
});
